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
    firstName: req.body.firstName,
    userName: req.body.userName
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
  let UserName = req.body.name

  if (typeof(userName)=='string') {
      Users.deleteOne({name:userName})
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
