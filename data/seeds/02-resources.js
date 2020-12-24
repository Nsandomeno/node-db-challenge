
exports.seed = function(knex) {

      return knex('resources').insert([
        {'name':'team meeting', 'description':'brain storm', 'project_id': 1},
        {'name':'tech support', 'description':'outside help', 'project_id': 1},
        {'name':'team meeting', 'description':'brain storm', 'project_id': 2},
        {'name':'tech support', 'description':'outside help', 'project_id': 2},
        {'name':'team meeting', 'description':'brain storm', 'project_id': 3},
        {'name':'tech support', 'description':'outside help', 'project_id': 3},

      ]);

};
