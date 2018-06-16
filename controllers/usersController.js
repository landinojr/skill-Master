'use strict';
const Users = require( '../models/users' );
console.log("loading the users Controller")


// this displays all of the users
exports.getAllUsers = ( req, res ) => {
  console.log('in getAllUsers')

  Users.find( {} )
    .exec()
    .then( ( users ) => {
      console.log("in getAllUsers")
      console.dir(users)
      res.render( 'users', {
        users: users
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'users promise complete' );
    } );
};




exports.saveUsers = ( req, res ) => {
  console.log("in saveuser!")
  console.dir(req)
  let newUsers = new Users( {
    name: req.body.name,
    description: req.body.description
  } )

  console.log("users = "+newUsers)

  newUsers.save()
    .then( () => {
      res.redirect( '/users' );
    } )
    .catch( error => {
      res.send( error );
    } );
};

exports.deleteUser = (req, res) => {
  console.log("in deleteUser")
  let UserName = req.body.deleteName
  if (typeof(usersName)=='string') {
      Users.deleteOne({name:userlName})
           .exec()
           .then(()=>{res.redirect('/users')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(userName)=='object'){
      Users.deleteMany({name:{$in:userName}})
           .exec()
           .then(()=>{res.redirect('/users')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(userName)=='undefined'){
      console.log("This is if they didn't select a users")
      res.redirect('/users')
  } else {
    console.log("This shouldn't happen!")
    res.send(`unknown usersName: ${userName}`)
  }

};
