import { Component, OnInit } from '@angular/core';
import { EpisodeServiceRepository } from '../../ddd/episode/infrastructure/EpisodeServiceRepository';
import { ListEpisode } from '../../ddd/episode/domain/models/ListEpisode';
import { GetEpisodesAll } from '../../ddd/episode/application/GetEpisodesAll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  espisodeList?:ListEpisode;
  pageCurrent:number = 1;
  pageInicial:number = 1;

  constructor(
    private serviceEpisode:EpisodeServiceRepository,
    private router:Router
  ){}
  ngOnInit(): void {
    this.init();
  }


  async init():Promise<void>{
    this.espisodeList = await this.getListEspisodes(this.pageCurrent);
    console.log(this.espisodeList);
  }

  async getListEspisodes(page:number):Promise<ListEpisode>{
    try {
      const getListEspisodesUseCase = new GetEpisodesAll(this.serviceEpisode);
      const listEpisode = await getListEspisodesUseCase.get(page);
      return listEpisode;
    } catch (error) {
      console.warn(error);
      throw error
    }
  }

  openSingleEpisodePage(idPage:number){
    this.router.navigateByUrl(`/episode/${idPage}`);
  }

  changeCurrent($event:number):void{
    this.pageCurrent = $event;
    this.init();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
