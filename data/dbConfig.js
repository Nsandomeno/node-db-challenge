// import knex
const knex = require('knex');
// import the config object from knexfile.js
const config = require('../knexfile.js');
// export based on the environment
module.exports = knex(config.development)