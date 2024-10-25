import { DesenvolvedorRepository } from "../repositories";

export class DesenvolvedorService {
    private _desenvolvedorRepository = new DesenvolvedorRepository();

    public async getAll() {
        return await this._desenvolvedorRepository.getAll();
    }
}