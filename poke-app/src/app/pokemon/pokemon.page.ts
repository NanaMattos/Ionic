import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

	pokemons = [];
	id: number;

  constructor(public pkmnService: PokemonService) { 
  	console.log();
  	this.id = 0;
  }

  ngOnInit() {
  }

  getPokemon(){
		console.log("Entrei na função")
		this.id++;
		this.pkmnService.getPokemon(this.id)
		.subscribe(
			(res)=>{
      			this.pokemons.push(res); 
      			console.log(res);
    		}
  		)
	}

}

