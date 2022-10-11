const express = require("express");
const products = require("../modules/Products/mock-data.js");

const routes = express.Router();

routes.get("/", (request, response) => {
  response.render("home", { products });
});

routes.get("/product/:id", (request, response) => {
  const { id } = request.params;
  const [product] = products.filter((product) => product.id === Number(id));

  response.render("product", { product });
});

module.exports = routes;
