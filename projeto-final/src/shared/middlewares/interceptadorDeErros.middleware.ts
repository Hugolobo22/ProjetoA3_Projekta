import { NextFunction, Request, Response, Router } from "express";
import { validationResult } from "express-validator";

const InterceptarErrosMiddleware = Router();

InterceptarErrosMiddleware.use('/', (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);
    
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    next();
});

export default InterceptarErrosMiddleware;