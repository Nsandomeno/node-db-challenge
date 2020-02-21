
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.string('name', 255).unique().notNullable()
    tbl.string('description', 255)
    tbl.boolean('completed').defaultTo(false).notNullable()
  })
  .createTable('resources', tbl => {
    tbl.increments()
    tbl.string('name', 255).unique().notNullable()
    tbl.string('description', 255)
  })
  .createTable('tasks', tbl => {
    tbl.increments()
    tbl.string('description', 255).unique().notNullable()
    tbl.string('notes', 255)
    tbl.boolean('completed').defaultTo(false).notNullable()
    tbl.string('project_name', 255)
      // foreign key
    tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    tbl.string('project_description', 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects')
};
