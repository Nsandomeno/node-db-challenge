
exports.seed = function(knex) {

      return knex('resources').insert([
        {'name':'team meeting', 'description':'brain storm'},
        {'name':'tech support', 'description':'outside help'},

      ]);

};
