const express = require('express');
const Recipe = require ('./recipe-model')
const db = require('./data/db-Config')

const router = express.Router();

router.get('/',(req,res) =>{
    Recipe.getAllRecipes()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Recipes", message:err.message });
    });
})

router.get('/:id/shoppinglist',(req,res) =>{
  Recipe.getShoppingList(req.params.id)
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get Recipes", message:err.message });
  });
})

router.get('/:id/instructions', (req,res) =>{
  Recipe.getInstructions(req.params.id)
  .then(steps => {
    res.status(200).json(steps);
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get Recipes", message:err.message });
  });
})

module.exports = router;