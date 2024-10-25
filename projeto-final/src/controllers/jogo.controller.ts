import { Request, Response } from "express";
import { JogoService } from "../services";

export default class JogoController {
    private _jogoService = new JogoService();

    public getAll = async (request: Request, response: Response) => {
        return response.send(await this._jogoService.getAll());
    }
}