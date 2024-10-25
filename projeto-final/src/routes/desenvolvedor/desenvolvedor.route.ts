import { Router } from "express";
import { DesenvolvedorController } from "../../controllers";

const DesenvolvedorRouter = Router();
const _desenvolvedorController = new DesenvolvedorController();

DesenvolvedorRouter.get('/', _desenvolvedorController.getAll);

export { DesenvolvedorRouter };
