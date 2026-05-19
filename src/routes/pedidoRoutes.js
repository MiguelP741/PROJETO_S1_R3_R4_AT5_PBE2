import { Router } from "express";
import pedidoController from "../controllers/pedidoController.js";

const pedidoRoutes = Router();

pedidoRoutes.post("/", pedidoController.criar);
pedidoRoutes.get("/", pedidoController.selecionar);
pedidoRoutes.put("/:pedidoId", pedidoController.editar);

pedidoRoutes.post("/:pedidoId/itens", pedidoController.criarI);
pedidoRoutes.put("/:pedidoId/itens/:itemId", pedidoController.editarI);
pedidoRoutes.delete("/:pedidoId/itens/:itemId", pedidoController.deletarI);

export default pedidoRoutes;