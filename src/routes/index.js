const express = require("express");

const routes = express.Router();
const ProductsController = require("../controller/ProductsController")

routes.get("/", (req, res) => res.send("<h1>Hello World</h1>"));

routes.get("/listar", ProductsController.listartdsProd);                                                                                                                               

routes.get("/listar/:id", ProductsController.listarsoum);

routes.post("/postar", ProductsController.lancar);

routes.put("/atualizar", ProductsController.atualizarprod);

routes.delete("/deletar", ProductsController.deletarprod);
module.exports = routes;