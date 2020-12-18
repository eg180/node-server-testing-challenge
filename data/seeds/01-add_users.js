
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Erick", age: 40},
        {name: "Christian", age: 17},
        {name: "Delphine", age: 29},
        {name: "Callie", age: 3},
        {name: "Olivia", age: 3}
      ]);
    });
};
