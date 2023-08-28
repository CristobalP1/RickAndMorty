import { Character } from "./Character";

export class ListAllCharacter {
    constructor(
        public readonly list: Character[],
        public readonly page?: number
    ){}

    getPage(): number {
        if (!this.page) {
            return 1;
        }
        return this.page;
    }
}