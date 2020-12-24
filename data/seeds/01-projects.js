
exports.seed = function(knex) {

      return knex('projects').insert([
          {'name':'first', 'description':'first project'},
          {'name':'second', 'description':'second project'},
          {'name':'third', 'description':'third project'},
          {'name':'fourth', 'description':'fourth project'},
      ]);

};
