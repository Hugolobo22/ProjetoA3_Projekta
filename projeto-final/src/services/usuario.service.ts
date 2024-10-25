import { Usuario } from "../domain";
import { UsuarioRepository } from "../repositories";

export class UsuarioService {
    private _usuarioRepository = new UsuarioRepository();
    
    public getAll() {
        return this._usuarioRepository.getAll();
    }

    public getById(id: number) {
        const usuario = this._usuarioRepository.getById(id);

        return usuario;
    }

    public create(usuario: Usuario) {
        return this._usuarioRepository.create(usuario);
    }

    public update(usuario: Usuario) {
        return this._usuarioRepository.update(usuario);
    }

    public patch(usuario: Usuario)  {
        return this._usuarioRepository.update(usuario);
    }

    public delete(id: number) {
        return this._usuarioRepository.delete(id);
    }
}