import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  public url:string;

  constructor(private http:HttpClient) {
    this.url = 'https://rickandmortyapi.com/api/'
   }

   get<t>(servicio:string , page:unknown):Observable<t>{
    const parametro = `/?page=${page}`;
    return this.http.get<t>(this.url + servicio + parametro);
  }

  getOnly<t>(servicio:string , request:unknown):Observable<t>{
      const params = `/${request}`;
      return this.http.get<t>(this.url + servicio + params);
  }
}
