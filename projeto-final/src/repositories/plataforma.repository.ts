import { Plataforma } from "../domain";
import { getConexao } from "./conexao";

export class PlataformaRepository {
    public async getAll() {
        const conexao = await getConexao();
        const [resultado] = await conexao.query("SELECT id, nome FROM plataformas ORDER BY nome ASC");
        conexao.end();
        return resultado as Plataforma[];
    }
}