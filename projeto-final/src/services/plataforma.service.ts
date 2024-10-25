import { PlataformaRepository } from "../repositories";

export class PlataformaService {
    private _plataformaRepository = new PlataformaRepository();

    public async getAll() {
        return await this._plataformaRepository.getAll();
    }
}