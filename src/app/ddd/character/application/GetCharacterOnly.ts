import { CharacterRepository } from "../domain/interface/CharacterRepository";
import { Character } from "../domain/models/Character";

export class GetCharacterOnly {
    constructor(
        private respository: CharacterRepository
    ){}
 
    async get(id: number):Promise<Character>{
        const character: Character = await this.respository.getCharacterOnly(id);
        return character;
    }
}