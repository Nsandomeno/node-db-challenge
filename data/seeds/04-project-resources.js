
exports.seed = function(knex) {

      return knex('project_resources').insert([
        {'project_id': 1, 'project_name':'first', 'resource_name':'tech support', 'resource_id':2},
        {'project_id': 1, 'project_name':'first', 'resource_name':'team meeting', 'resource_id':1},
        {'project_id': 2, 'project_name':'second', 'resource_name':'tech support', 'resource_id':2},
        {'project_id': 3, 'project_name':'third', 'resource_name':'tech support', 'resource_id':2},
        {'project_id': 4, 'project_name':'fourth', 'resource_name':'tech support', 'resource_id':2}
      ]);

};
