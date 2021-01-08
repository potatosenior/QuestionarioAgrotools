// Update with your config settings.
const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "./mydb.sqlite"),
    },
    migrations: {
      // tableName: "knex_migrations",
      directory: path.resolve(__dirname, "./migrations"),
    },
    useNullAsDefault: true,
  },
};
