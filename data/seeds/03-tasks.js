
exports.seed = function(knex) {

      return knex('tasks').insert([
        // first project
        {'description': 'first project task one', 'notes':'task one', 'project_name':'first', 'project_id':1, 'project_description':'first project'},
        {'description': 'first project task two', 'notes':'task two', 'project_name':'first', 'project_id':1, 'project_description':'first project'},
        // second project
        {'description': 'second project task one', 'notes':'task one', 'project_name':'second', 'project_id':2, 'project_description':'second project'},
        {'description': 'second project task two', 'notes':'task two', 'project_name':'second', 'project_id':2, 'project_description':'second project'},
        // third project
        {'description': 'third project task one', 'notes':'task one', 'project_name':'third', 'project_id':3, 'project_description':'third project'},
        {'description': 'third project task two', 'notes':'task two', 'project_name':'third', 'project_id':3, 'project_description':'third project'},
        // fourth project
        {'description': 'fourth project task one', 'notes':'task one', 'project_name':'fourth', 'project_id':4, 'project_description':'fourth project'},
        {'description': 'fourth project task two', 'notes':'task two', 'project_name':'fourth', 'project_id':4, 'project_description':'fourth project'},


      ]);

};
