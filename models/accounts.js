'use strict';
const mongoose = require( 'mongoose' );

var accountsSchema = mongoose.Schema( {
  firstName: String,
  lastName: String,
  password: String,
  userName: String
} );

module.exports = mongoose.model( 'accounts', accountsSchema );
