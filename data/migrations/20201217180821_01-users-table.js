
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments();
      tbl.string("name", 255).unique().notNullable();
      tbl.integer("age", 2).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  
};
