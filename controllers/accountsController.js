'use strict';
const Account = require( '../models/accounts' );
console.log("loading the accounts Controller")


// this displays all of the users
exports.getAllAccount = ( req, res ) => {
  console.log('in getAllAccounts')

  Accounts.find( {} )
    .exec()
    .then( ( accounts) => {
      console.log("getting all of the accounts that is listed in my database")
      console.dir(accounts)
      res.render( 'accounts', {
        accounts: accounts
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




exports.saveAccount = ( req, res ) => {
  console.log("i am saving the account and the all of the stuff assoicated with the account")
  console.dir(req)
  let account = new accounts( {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password
  } )

  console.log("accounrHolders = "+ account)

  newAccount.save()
    .then( () => {
      res.redirect( '/accounts' );
    } )
    .catch( error => {
      res.send( error );
    } );
};

exports.deleteAccount = (req, res) => {
  console.log("in deleteUser")
  let account = req.body.name

  if (typeof(account)=='string') {
      account.deleteOne({name:account})
           .exec()
           .then(()=>{res.redirect('/accounts')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(account)=='object'){
      account.deleteMany({name:{$in:account}})
           .exec()
           .then(()=>{res.redirect('/accounts')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(account)=='undefined'){
      console.log("This is if they didn't select a account")
      res.redirect('/accounts')
  } else {
    console.log("This shouldn't happen!")
    res.send(`unknown Account: ${account}`)
  }

};
