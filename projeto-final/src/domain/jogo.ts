import Genero from "./genero";

export default interface Jogo {
    id: number;
    nome: string;
    dataLancamento: Date;
    urlCapa: string;
    urlCapaPaisagem: string;
    urlLogo: string;
    avaliacao: number;
    generos: Genero[];
}