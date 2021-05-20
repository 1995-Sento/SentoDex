import { PokemonlistComponent } from './components/poke-list/poke-list.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: 'home', component: PokemonlistComponent},
  {path: 'pokeCard/:id', component: PokeCardComponent},
  {path: '', component: PokemonlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
