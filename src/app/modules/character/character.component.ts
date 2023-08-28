import { Component, DoCheck, OnInit } from '@angular/core';
import { CharacterServiceRepository } from '../../ddd/character/infrastructure/CharacterServiceRepository';
import { ListAllCharacter } from '../../ddd/character/domain/models/ListAllCharacter';
import { GetListAllCharacter } from '../../ddd/character/application/GetListAllCharacter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  listCharacter?:ListAllCharacter;
  pageCurrent:number = 1;
  pageInicial:number = 1;

  constructor(
    private service: CharacterServiceRepository,
    private router: Router
  ){}
  ngOnInit(): void {
    this.init();
  }


  async init():Promise<void>{
    this.listCharacter = await this.getListAllCharacter(this.pageCurrent);
  }

  async getListAllCharacter(page:number):Promise<ListAllCharacter>{
    try {
      const response = new GetListAllCharacter(this.service);
      const listCharacter = await response.get(page);
      return listCharacter;
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }

  openSingleCharacterPage(idCharacter: number): void {
    this.router.navigate([`/character/${idCharacter}`]);
  }

  changeCurrent($event:number):void{
    this.pageCurrent = $event;
    this.init();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
