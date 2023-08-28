import { EpisodeRepository } from "../domain/interface/EpisodeRepository";
import { Episode } from "../domain/models/Episode";

export class GetEspisodeOne {
    constructor(
        private respository: EpisodeRepository
    ){}

    async get(id:number):Promise<Episode>{
        const response = await this.respository.getEpisodeOnly(id);
        return response;
    }
}