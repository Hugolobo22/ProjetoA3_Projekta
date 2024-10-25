import { Request, Response } from "express";
import { PlataformaService } from "../services";

export default class PlataformaController {
    private _plataformaService = new PlataformaService();

    public getAll = async (request: Request, response: Response) => {
        return response.send(await this._plataformaService.getAll());
    }
}