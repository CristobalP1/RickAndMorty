import { Injectable } from "@angular/core";
import { RickAndMortyService } from "../../../service/rick-and-morty.service";
import { CharacterRepository } from "../domain/interface/CharacterRepository";
import { Character } from "../domain/models/Character";
import { ResponseCharacterAll } from "../domain/dto/ResponseCharacterAll";
import { Origen } from "../domain/models/Origen";
import { ListAllCharacter } from "../domain/models/ListAllCharacter";
import { RequestCharacterAll } from "../domain/dto/RequestCharacterAll";
import { RequestCharacterOnly } from "../domain/dto/RequestCharacterOnly";
import { ResponseCharacterOnly } from "../domain/dto/ResponseCharacterOnly";

@Injectable()
export class CharacterServiceRepository implements CharacterRepository {
    servicio = 'character';
    constructor(
        private repository: RickAndMortyService
    ){}
    async getCharacterOnly(id: number): Promise<Character> {

        const request: RequestCharacterOnly = {
            id: id || 1
        }


        try {
            const response: ResponseCharacterOnly | undefined	= await this.repository.getOnly<ResponseCharacterOnly>(this.servicio, request?.id).toPromise();

            if (!response) {
                throw new Error();
            }

            const origines:Origen = new Origen(response?.origin?.name, response?.origin?.url);
            const location:Origen = new Origen(response?.location?.name, response?.location?.url);

            const character: Character = new Character(
                response.id,
                response.name,
                response.status,
                response.species,
                response.type,
                response.gender,
                origines,
                location,
                response.image,
                response.episode,
                response.url,
                response.created
            )
            return character;
        } catch (error) {
            console.warn(error);
            throw error;
        }
    }
    async getAllCharacter(page:number): Promise<ListAllCharacter> {

        const request:RequestCharacterAll = {
            page: page
        }

        if (!request.page || request.page < 1) {
            request.page = 1;
        }
        try {

            const response = await this.repository.get<ResponseCharacterAll>(this.servicio, request.page).toPromise();
            const listAllCharacters: ListAllCharacter = new ListAllCharacter([], response?.info.pages.valueOf());
            response?.results.forEach(character => {
                const origenes:Origen = new Origen(character.origin.name, character.origin.url);
                const location:Origen = new Origen(character.location.name, character.location.url);
                listAllCharacters.list.push(new Character(
                    character.id,
                    character.name,
                    character.status,
                    character.species,
                    character.type,
                    character.gender,
                    origenes,
                    location,
                    character.image,
                    character.episode,
                    character.url,
                    character.created
                ));
            });
            response?.info.pages
            return listAllCharacters;

        } catch (error) {
            console.warn(error);
            throw error;
        }
    }
}