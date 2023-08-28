import { Episode } from "./Episode";

export class ListEpisode {
    constructor(
        public readonly list: Episode[],
        public readonly page?: number,
    ){}

    getPage(): number {
        if (!this.page) {
            return 1;
        }
        return this.page;
    }

}