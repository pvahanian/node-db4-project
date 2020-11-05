exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        { ingredient_name: 'Eggs'},
        { ingredient_name: 'Milk'},
        { ingredient_name: 'Butter'}, 
        { ingredient_name: 'Flour '},
        { ingredient_name: 'Sugar'},
        { ingredient_name: 'Salt'},
        { ingredient_name: 'Pepper'},
      ]);
    });
};