import { Episode } from "../models/Episode";
import { ListEpisode } from "../models/ListEpisode";

export interface EpisodeRepository {
    getEpisodeMulti(ids: string): Promise<ListEpisode>;
    getEpisodePage(page: number): Promise<ListEpisode>;
    getEpisodeOnly(id: number): Promise<Episode>;
}