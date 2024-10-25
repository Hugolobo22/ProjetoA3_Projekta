import { Desenvolvedor } from "../domain";
import { getConexao } from "./conexao";

export class DesenvolvedorRepository {
    public async getAll() {
        const conexao = await getConexao();
        const [resultado] = await conexao.query("SELECT id, nome FROM desenvolvedores ORDER BY nome ASC");
        conexao.end();
        return resultado as Desenvolvedor[];
    }
}