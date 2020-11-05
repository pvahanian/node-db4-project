
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        { step:1,instruction:"Crack Egg",quantity:3, ingredient_id:1, recipe_id:1},
        { step:2,instruction:"Add Milk",quantity:.5, ingredient_id:2, recipe_id:1},
        { step:3,instruction:"Add Salt",quantity:.1, ingredient_id:6, recipe_id:1},
        { step:4,instruction:"Add Pepper",quantity:.1, ingredient_id:7, recipe_id:1},
        { step:5,instruction:"Scramble",quantity:null, ingredient_id:null, recipe_id:1},
      ]);
    });
  };