'use strict'
// MONGODB_URI should match the heroku variable name
// string to the instance || the database name
exports.URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/FUNTIMES'
exports.PORT = process.env.PORT || 4000
exports.SECRET = process.env.SECRET || 'super-secret-passphrase'
exports.PUBLIC_FOLDER = (process.env.NODE_ENV === 'production') ? 'build' : 'public'; 
