
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {id: 1, recipe_name: 'Scrambled Eggs'},
        {id: 2, recipe_name: 'Cookies'},
        {id: 3, recipe_name: 'Pancakes'}
      ]);
    });
};
