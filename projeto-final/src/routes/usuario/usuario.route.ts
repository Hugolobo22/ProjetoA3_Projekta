import { Router } from "express";
import { body, checkSchema } from "express-validator";
import { CreateUsuarioSchema, PatchUsuarioSchema, UpdateUsuarioSchema } from "./usuario.schema";
import { UsuarioController } from "../../controllers";
import InterceptarErrosMiddleware from "../../shared/middlewares/interceptadorDeErros.middleware";

const UsuarioRouter = Router();
const _usuarioController = new UsuarioController();

UsuarioRouter.get('/', _usuarioController.getAll);
UsuarioRouter.get('/:id', _usuarioController.getById);
UsuarioRouter.post('/', checkSchema(CreateUsuarioSchema), InterceptarErrosMiddleware, _usuarioController.create);
UsuarioRouter.put('/:id', checkSchema(UpdateUsuarioSchema), InterceptarErrosMiddleware, _usuarioController.update);
UsuarioRouter.patch('/:id', checkSchema(PatchUsuarioSchema), _usuarioController.update);
UsuarioRouter.delete('/:id', _usuarioController.delete);

export { UsuarioRouter };