import { JogoRepository } from "../repositories";

export class JogoService {
    private _jogoRepository = new JogoRepository();

    public async getAll() {
        return await this._jogoRepository.getAll();
    }
}