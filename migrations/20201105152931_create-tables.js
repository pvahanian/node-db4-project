const { table } = require("../data/dbConfig");

exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name', 128).notNullable()
      })
      .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name', 128).notNullable()
      })
      .createTable('steps', tbl => {
        tbl.increments()
        tbl.integer('step').notNullable()
        tbl.string('instruction').notNullable()
        tbl.float('quantity')
        tbl.integer('ingredient_id')
          .unsigned()
          .references('id')
          .inTable('ingredients')
          .onDelete('CASCADE') // 'RESTRICT'
          .onUpdate('CASCADE') // 'RESTRICT'
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE') // 'RESTRICT'
          .onUpdate('CASCADE') // 'RESTRICT'
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
