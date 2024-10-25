import { Router } from "express";
import { JogoController } from "../../controllers";

const JogoRouter = Router();
const _JogoController = new JogoController();

JogoRouter.get('/', _JogoController.getAll);

export { JogoRouter };
