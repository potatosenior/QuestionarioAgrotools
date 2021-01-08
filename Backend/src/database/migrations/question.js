const knex = require("knex");

exports.up = knex =>
  knex.schema.createTable("question", table => {
    table.increments("id").primary();
    table.string("question").notNullable();
    table
      .integer("form_id")
      .notNullable()
      .references("form.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropSchema("question");
