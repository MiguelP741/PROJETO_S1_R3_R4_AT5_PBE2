import { Router } from "express";
const routes = Router();
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRepository from "./produtoRoutes.js";

routes.use('/categorias', categoriaRoutes);
routes.use('/produtos', produtoRepository);

export default routes;