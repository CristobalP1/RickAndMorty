import { Origen } from "./Origen";

export class Character {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly status: string,
    public readonly species: string,
    public readonly type: string,
    public readonly gender: string,
    public readonly origin: Origen,
    public readonly location: Origen,
    public readonly image: string,
    public readonly episode: string[],
    public readonly url: string,
    public readonly created: string,
  ){};

  getEpisodesID(): string {
    const episodeIDs: number[] = [];
  
    this.episode.forEach((episode) => {
      const id = episode.split('/').pop();
      if (id) {
        episodeIDs.push(Number(id));
      }
    });
  
    const episodeIDString = episodeIDs.join(',');
    return episodeIDString;
  }

}