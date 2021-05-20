import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
    ) { }

  //get the list of pokemons
  getPokemonList(limit:number, offset:number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }
  getDataPokemon(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  getPokemonById(id: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}
