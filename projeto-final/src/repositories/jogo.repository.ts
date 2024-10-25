import { Jogo } from "../domain";
import { getConexao } from "./conexao";

export class JogoRepository {
    public async getAll() {
        const conexao = await getConexao();
        const [resultado] = await conexao.query(
            `SELECT
                j.id,
                j.nome,
                j.data_lancamento as dataLancamento,
                j.url_capa as urlCapa,
                j.url_capa_paisagem as urlCapaPaisagem,
                j.url_logo as urlLogo,
                j.avaliacao,
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'id', g.id,
                        'nome', g.nome
                    )
                ) AS generos
            FROM jogos j
            INNER JOIN jogos_generos jg ON jg.id_jogo = j.id
            INNER JOIN generos g ON g.id = jg.id_genero
            GROUP BY j.id`);
        conexao.end();
        return resultado as Jogo[];
    }
}