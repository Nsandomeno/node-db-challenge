// bring in knex cleaner as cleaner
const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode:'truncate', // resets the ids
    ignoreTables:['knex_migrations', 'knex_migration_lock'], // don't empty migration tables
  })
};
