import { Router } from "express";
import { GeneroController } from "../../controllers";

const GeneroRouter = Router();
const _generoController = new GeneroController();

GeneroRouter.get('/', _generoController.getAll);
// TODO: Adicionar validação dos dados que a requisição está trazendo
GeneroRouter.post('/', _generoController.post);

export { GeneroRouter };
