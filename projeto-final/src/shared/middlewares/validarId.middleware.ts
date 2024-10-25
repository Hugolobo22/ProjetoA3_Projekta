import { NextFunction, Request, Response, Router } from "express";

const ValidarIdMiddleware = Router();

ValidarIdMiddleware.use('/*/:id', (request: Request, response: Response, next: NextFunction) => {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      return response.status(400).send({ msg: "ID inválido!" });
    }

    next();
})

export default ValidarIdMiddleware;