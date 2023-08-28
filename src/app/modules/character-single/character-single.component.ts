import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterServiceRepository } from '../../ddd/character/infrastructure/CharacterServiceRepository';
import { Character } from '../../ddd/character/domain/models/Character';
import { GetCharacterOnly } from '../../ddd/character/application/GetCharacterOnly';
import { EpisodeServiceRepository } from '../../ddd/episode/infrastructure/EpisodeServiceRepository';
import { ListEpisode } from '../../ddd/episode/domain/models/ListEpisode';
import { GetEpisodesOnly } from '../../ddd/episode/application/GetEpisodesOnly';

@Component({
  selector: 'app-character-single',
  templateUrl: './character-single.component.html',
  styleUrls: ['./character-single.component.scss'],
})
export class CharacterSingleComponent implements OnInit {
  title: string = '22';
  idCharacter?: number;
  character?: Character;
  espisodesFilter?:ListEpisode;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private service: CharacterServiceRepository,
    private serviceEpisode: EpisodeServiceRepository
  ) {}
  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.idCharacter = params['id'];
    });

    this.init();
  }

  async init(): Promise<void> {
    this.character = await this.getCharacter(this.idCharacter || 1);
    this.espisodesFilter = await this.getEpisodesFilter(this.character.getEpisodesID());
    console.log(this.character);
  }

  async getCharacter(id: number): Promise<Character> {
    const getCharacterUseCase = new GetCharacterOnly(this.service);
    const character = await getCharacterUseCase.get(id);
    return character;
  }

  async getEpisodesFilter(ids:string):Promise<ListEpisode>{
    const getEspisodeUseCase = new GetEpisodesOnly(this.serviceEpisode);
    const espisodesFilter = await getEspisodeUseCase.get(ids);
    return espisodesFilter;
  }

  openSingleEpisodePage(idPage:number):void{
    this.router.navigate([`/episode/${idPage}`]);
  }
}
