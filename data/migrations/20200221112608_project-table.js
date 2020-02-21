
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
  .createTable('project_resources', tbl => {
      tbl.primary(['project_id', 'resource_id'])

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.string('project_name', 255)
        tbl.string('resource_name', 255)

        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources')
            .dropTableIfExists('tasks')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects')
};
