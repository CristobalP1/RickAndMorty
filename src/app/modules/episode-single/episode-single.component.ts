import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeServiceRepository } from '../../ddd/episode/infrastructure/EpisodeServiceRepository';
import { Episode } from '../../ddd/episode/domain/models/Episode';
import { GetEpisodesOnly } from '../../ddd/episode/application/GetEpisodesOnly';
import { GetEspisodeOne } from '../../ddd/episode/application/GetEspisodeOne';

@Component({
  selector: 'app-episode-single',
  templateUrl: './episode-single.component.html',
  styleUrls: ['./episode-single.component.scss']
})
export class EpisodeSingleComponent implements OnInit {

  idEpisode?:number;
  espisodeOne?: Episode;

  constructor(
    private activeRouter: ActivatedRoute,
    private serviceEpisode:EpisodeServiceRepository,
  ) {}
  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.idEpisode = params['id'];
    })
    this.init();
  }

  async init():Promise<void>{
    this.espisodeOne = await this.getOnlyEspisode(this.idEpisode || 0);
    console.log(this.espisodeOne);
  }

  async getOnlyEspisode(idEpisode:number):Promise<Episode>{
    const response = new GetEspisodeOne(this.serviceEpisode);
    const espisodeOnly = await response.get(idEpisode);
    return espisodeOnly;
  }

}
