// import { Router } from "express";
// import pedidoController from "../controllers/pedidoController.js";
// const pedidoRoutes = Router();

// pedidoRoutes.post('/', pedidoController.criar)
// pedidoRoutes.put('/:pedidoId', pedidoController.editar)
// pedidoRoutes.get('/', pedidoController.selecionar)
// pedidoRoutes.post('/:pedidoId/item', pedidoController.criarI)
// pedidoRoutes.put('/item/:itemId', pedidoController.editarI)
// pedidoRoutes.delete('/item/:itemId', pedidoController.deletarI)

// export default pedidoRoutes;

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