import { DataService } from '../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokemonlistComponent implements OnInit {

  pokemons : any [] = [];
  page = 1;
  numberPokemons: number = 151;
  offset: number =0;
  pokemonQuantity: number=12;

  constructor(
    private pokeListGet : DataService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.getArrayPokemon();
  }
   //run  Array pokemons and set the page value
   getArrayPokemon(){
    this.offset =(this.page*this.pokemonQuantity)- this.pokemonQuantity;
    this.pokeListGet.getPokemonList(this.pokemonQuantity, this.offset)
      .subscribe((response: any) => {
         response.results.forEach((result: { name: string; }) => {
           this.pokeListGet.getDataPokemon(result.name)
            .subscribe((uniqResponse: any) =>{
               this.pokemons.sort();
               this.pokemons.push(uniqResponse);
                console.log(this.pokemons);
               this.pokemons.sort(function (a, b) {
          //to order by the number of id
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          });
        });
      });
    });
   }
   //catch the id of pokemon inside the card to launch the card with the pokemon info from html
  getPokemon(pokemonData:any) {
    this.router.navigateByUrl(`pokeCard/${pokemonData}`)
  }

}
