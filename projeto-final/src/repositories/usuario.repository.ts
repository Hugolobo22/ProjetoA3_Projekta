import { Usuario } from "../domain";

export class UsuarioRepository {
    private _usuarios: Usuario[] = [
        { id: 1, nome: "João Silva", login: "joaosilva", senha: "senha123" },
        { id: 2, nome: "Maria Oliveira", login: "mariaoliveira", senha: "senha456" },
        { id: 3, nome: "Carlos Pereira", login: "carlospereira", senha: "senha789" },
        { id: 4, nome: "Ana Souza", login: "anasouza", senha: "senha012" },
        { id: 5, nome: "Paulo Santos", login: "paulosantos", senha: "senha345" },
        { id: 6, nome: "Fernanda Costa", login: "fernandacosta", senha: "senha678" },
        { id: 7, nome: "Ricardo Lima", login: "ricardolima", senha: "senha901" },
        { id: 8, nome: "Luciana Alves", login: "lucianaalves", senha: "senha234" },
        { id: 9, nome: "Marcos Silva", login: "marcossilva", senha: "senha567" },
        { id: 10, nome: "Juliana Rocha", login: "julianarocha", senha: "senha890" },
    ];
    
    public getAll() {
        return this._usuarios;
    }

    public getById(id: number) {
        return this._usuarios.find((usuario) => usuario.id === id);
    }

    public create(usuario: Usuario) {
        const novoUsuario = {
            ...usuario,
            id: this._usuarios[this._usuarios.length - 1].id + 1,
        }

        this._usuarios.push(novoUsuario);

        return novoUsuario;
    }

    public update(usuario: Usuario) {
        this._usuarios[this.buscarUsuarioNaLista(usuario)] = { ...usuario };

        return usuario;
    }

    public delete(id: number) {
        const indexUsuarioBuscado = this._usuarios.findIndex( us => us.id === id );

        const usuarioExcluido = this._usuarios.splice(indexUsuarioBuscado, 1);

        return usuarioExcluido;
    }

    private buscarUsuarioNaLista(usuario: Usuario) {
        const indexUsuarioBuscado = this._usuarios.findIndex( us => us.id === usuario.id );

        if (indexUsuarioBuscado === -1) {
            throw new Error('Usuário não encontrado');
        }

        return indexUsuarioBuscado;
    }
}