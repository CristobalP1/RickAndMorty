import { EpisodeRepository } from "../domain/interface/EpisodeRepository";
import { ListEpisode } from "../domain/models/ListEpisode";

export class GetEpisodesAll {
    constructor(
        private resposotory: EpisodeRepository
    ){}

    async get(page:number):Promise<ListEpisode>{
        const response = await this.resposotory.getEpisodePage(page);
        return response;
    }
}