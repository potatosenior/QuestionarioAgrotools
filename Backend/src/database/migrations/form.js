const knex = require("knex");

exports.up = knex =>
  knex.schema.createTable("form", table => {
    table.increments("id").primary();
    table.string("author").notNullable();
    table.string("title").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropSchema("form");
