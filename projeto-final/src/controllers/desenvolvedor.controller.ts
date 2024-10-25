import { Request, Response } from "express";
import { DesenvolvedorService } from "../services";

export default class DesenvolvedorController {
    private _desenvolvedorService = new DesenvolvedorService();

    public getAll = async (request: Request, response: Response) => {
        return response.send(await this._desenvolvedorService.getAll());
    }
}