const knex = require("knex");

exports.up = knex =>
  knex.schema.createTable("awnsers", table => {
    table.increments("id").primary();
    table.string("awnser_text").notNullable();
    table
      .integer("question_id")
      .notNullable()
      .references("question.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("awnser_id")
      .notNullable()
      .references("awnser.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropSchema("awnsers");
