export class Episode {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly air_date: string,
        public readonly episode: string,
        public readonly characters: string[],
        public readonly url: string,
        public readonly created: string
    ){}
}