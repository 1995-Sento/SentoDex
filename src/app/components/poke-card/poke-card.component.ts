import { PokemonlistComponent } from './../poke-list/poke-list.component';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  //Methods
    pokemon: any = '';
    pokemonType1: string = '';
    pokemonType2: string = '';
    pokemonWeight: number = 0;
    pokemonHeight: number = 0;
    pokemonFrontImage = '';
    pokemonBackImage = '';
    pokemonNom: String = '';
  //EndMethods

  constructor(
    private pokeCardService : DataService,
    private activatedRouter : ActivatedRoute
  ) {
    //get the id from the poke-list with the ActivatedRoute
    this.activatedRouter.params.subscribe(
      params=>{
        this.getPokemonId(params['id']);
      }
    );
   }

  ngOnInit(): void {
  }

  getPokemonId(id:number){
    this.pokeCardService.getPokemonById(id).subscribe(
      res =>{
        //get the data of pokemon from the pokemonid
        this.pokemon = res;
        this.pokemonBackImage = this.pokemon.sprites.back_default;
        this.pokemonFrontImage = this.pokemon.sprites.front_default;
        this.pokemonHeight = this.pokemon.height;
        this.pokemonWeight = this.pokemon.weight;
        this.pokemonNom = this.pokemon.name;
        this.pokemonNom = this.pokemonNom.toUpperCase();
        this.pokemonType1 = this.pokemon.types[0].type.name;
        this.pokemonType2 = this.pokemon.types[1].type.name;
        /*if (this.pokemon.types[1].type != null || this.pokemon.types[1].type != Undefined){
          this.pokemonType2 = this.pokemon.types[1].type.name;
        }else{
          this.pokemonType2 =" ";
        }*/
      },
      err =>{
        console.log('Fatal error cant show the values'+err);
      }
    );
  }
}
