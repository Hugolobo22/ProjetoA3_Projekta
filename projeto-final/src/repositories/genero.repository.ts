import { FieldPacket, RowDataPacket, ResultSetHeader } from "mysql2";
import { Genero } from "../domain";
import { getConexao } from "./conexao";

export class GeneroRepository {
    public async getAll() {
        const conexao = await getConexao();
        const [resultado] = await conexao.query("SELECT id, nome FROM generos ORDER BY nome ASC");
        conexao.end();
        return resultado as Genero[];
    }

    // TODO: Aplicar tratamento de exceções para gênero não encontrado e outros possíveis erros
    public async getById(id: number) {
        const conexao = await getConexao();
        const [resultado]: [RowDataPacket[], FieldPacket[]] = await conexao.query("SELECT id, nome FROM generos WHERE id = ?", [id]);
        const [generoEncontrado] = resultado;
        conexao.end();
        return generoEncontrado;
    }

    // TODO: Aplicar tratamento de exceções para gênero duplicado e outros possíveis erros
    public async create(genero: Genero) {
        const conexao = await getConexao();
        const [resultado] = await conexao.execute<ResultSetHeader>("INSERT INTO generos (nome) VALUES (?)", [genero.nome]);
        const { insertId } = resultado;
        const generoInserido = await this.getById(insertId);
        conexao.end();
        return generoInserido;
    }
}