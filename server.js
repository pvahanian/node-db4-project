const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require('./recipeRouter')


const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipe', RecipeRouter)

module.exports = server;



//const db = require('./data/db-config.js');