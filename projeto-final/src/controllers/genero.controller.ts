import { Request, Response } from "express";
import { GeneroService } from "../services";

export default class GeneroController {
    private _generoService = new GeneroService();

    public getAll = async (request: Request, response: Response) => {
        return response.send(await this._generoService.getAll());
    }

    // TODO: Tratar erros internos, como por exemplo, problema em conectar com o banco de dados,
    // falha ao criar entidade por nome duplicado, etc. Lembrem-se que os erros são disparados
    // nas camadas mais internas, aqui você só vai tratá-los para exibir ao usuário da forma que
    // você achar mais adequado. Lembrando que erros internos começam com o status HTTP da família 500
    public post = async (request: Request, response: Response) => {
        const generoCriado = await this._generoService.create(request.body);
        return response
            .status(201)
            .send(generoCriado);
    }
}