import { Injectable } from '@angular/core';
import { RickAndMortyService } from '../../../service/rick-and-morty.service';
import { RequestEpisodeOnly } from '../domain/dto/RequestEpisodeOnly';
import { ResponseEpisodeOnly } from '../domain/dto/ResponseEpisodeOnly';
import { EpisodeRepository } from '../domain/interface/EpisodeRepository';
import { Episode } from '../domain/models/Episode';
import { ListEpisode } from '../domain/models/ListEpisode';
import { RequestEpisodePage } from '../domain/dto/RequestEpisodePage';
import { ResponseEspisodePage } from '../domain/dto/ResponseEspisodePage';
import { RequestEpisodeOne } from '../domain/dto/RequestEpisodeOne';

@Injectable()
export class EpisodeServiceRepository implements EpisodeRepository {
  servicio = 'episode';
  constructor(private repository: RickAndMortyService) {}
  async getEpisodeOnly(id: number): Promise<Episode> {
    const request: RequestEpisodeOne = {
      id
    };
    if (!request.id) {
      throw new Error('Request is invalid');
    }


    try {
      const response: ResponseEpisodeOnly | undefined = await this.repository.getOnly<ResponseEpisodeOnly>(this.servicio, request?.id).toPromise();
      if (!response) {
        throw new Error('Response is undefined');
      }
      return new Episode(response.id, response.name, response.air_date, response.episode, response.characters, response.url, response.created);
    } catch (error) {
      console.warn(error);
      throw error;
    }

  }
  async getEpisodePage(page: number): Promise<ListEpisode> {

    const request: RequestEpisodePage = {
      page: page,
    }

    if (!request.page || request.page < 1) {
      throw new Error('Request is invalid');
    }

    try {
      const response : ResponseEspisodePage | undefined = await this.repository.get<ResponseEspisodePage>(this.servicio, request?.page).toPromise();
      if (!response) {
        throw new Error('Response is undefined');
      }
      const espisodeList:ListEpisode = new ListEpisode([],response?.info.pages.valueOf());
      response.results.forEach(episodeData => {
        espisodeList.list.push(new Episode(
          episodeData.id,
          episodeData.name,
          episodeData.air_date,
          episodeData.episode,
          episodeData.characters,
          episodeData.url,
          episodeData.created
        ))
      })

      return espisodeList;

    } catch (error) {
      console.warn(error);
      throw error;
    }
  }
  async getEpisodeMulti(ids: string): Promise<ListEpisode> {
    const request: RequestEpisodeOnly = {
      ids: ids,
    };

    if (!request.ids) {
      throw new Error('Invalid request');
    }

    try {
      const response: ResponseEpisodeOnly[] | undefined = await this.repository
        .getOnly<ResponseEpisodeOnly[]>(this.servicio, request?.ids)
        .toPromise();
      if (!response) {
        throw new Error();
      }
      const episodeDataList = Array.isArray(response) ? response : [response];
      const episodelist = new ListEpisode(
        episodeDataList.map(episodeData => {
          return new Episode(
            episodeData.id,
            episodeData.name,
            episodeData.air_date,
            episodeData.episode,
            episodeData.characters,
            episodeData.url,
            episodeData.created
          );
        })
      );
      return episodelist;
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }
}
