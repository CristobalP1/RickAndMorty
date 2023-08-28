import { CharacterRepository } from "../domain/interface/CharacterRepository";
import { ListAllCharacter } from "../domain/models/ListAllCharacter";

export class GetListAllCharacter {
    constructor(
        private respository: CharacterRepository
    ){}

    async get(page:number):Promise<ListAllCharacter>{
        const listCharacter: ListAllCharacter = await this.respository.getAllCharacter(page);
        return listCharacter;
    }
}