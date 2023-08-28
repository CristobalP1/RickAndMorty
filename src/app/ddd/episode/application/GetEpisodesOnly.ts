import { EpisodeRepository } from "../domain/interface/EpisodeRepository";
import { ListEpisode } from "../domain/models/ListEpisode";

export class GetEpisodesOnly {
    constructor(
        private repository: EpisodeRepository
    ){}

    async get(ids:string):Promise<ListEpisode>{
        const episodes: ListEpisode = await this.repository.getEpisodeMulti(ids);
        return episodes;
    }
}