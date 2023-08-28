import { Character } from "../models/Character";
import { ListAllCharacter } from "../models/ListAllCharacter";

export interface CharacterRepository {
    getAllCharacter(page: number):Promise<ListAllCharacter>;
    getCharacterOnly(id: number):Promise<Character>;
}