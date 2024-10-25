import { Router } from "express";
import { PlataformaController } from "../../controllers";

const PlataformaRouter = Router();
const _plataformaController = new PlataformaController();

PlataformaRouter.get('/', _plataformaController.getAll);

export { PlataformaRouter };
