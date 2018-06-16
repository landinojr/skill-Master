'use strict';
const mongoose = require( 'mongoose' );

var usersSchema = mongoose.Schema( {
  firstName: String,
  lastName: String,
  password: String,
  userName: String
} );

module.exports = mongoose.model( 'Users', usersSchema );
