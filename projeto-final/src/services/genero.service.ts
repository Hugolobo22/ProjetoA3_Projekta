import { Genero } from "../domain";
import { GeneroRepository } from "../repositories";

export class GeneroService {
    private _generoRepository = new GeneroRepository();

    public async getAll() {
        return await this._generoRepository.getAll();
    }

    public async create(genero: Genero) {
        return await this._generoRepository.create(genero);
    }
}