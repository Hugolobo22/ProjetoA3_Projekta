import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UsuarioService } from "../services";

export default class UsuarioController {
  private _usuarioService = new UsuarioService();
  
  public getAll = (request: Request, response: Response) => {
    return response.send(this._usuarioService.getAll());
  }

  public getById = (resquest: Request, response: Response) => {
    const id = parseInt(resquest.params.id);

    const usuarioSolicitado = this._usuarioService.getById(id);

    if (!usuarioSolicitado) {
      return response.status(404).send({ msg: "usuario não encontrado" });
    }

    return response.send(usuarioSolicitado);
  }

  public create = (request: Request, response: Response) => {
    return response.status(201).send(this._usuarioService.create(request.body));
  }

  public update = (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    let dadoAtualizado;

    try {
      dadoAtualizado = this._usuarioService.update({
        ...request.body,
        id: id,
      });
    } catch (error: any) {
      return response.status(400).send({ error: error.message });
    }  
    
    return response.send(dadoAtualizado);
  }
  
  public delete = (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    let usuarioRemovido;

    try {
      usuarioRemovido = this._usuarioService.delete(id);
    } catch (error: any) {
      return response.status(400).send({ error: error.message });
    }  

    return response.status(200).send(usuarioRemovido);
  }
}
