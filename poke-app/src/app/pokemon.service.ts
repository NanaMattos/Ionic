import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

	pokeApiUrl = 'https://pokeapi.co/api/v2/';

  constructor(public http: HttpClient) { 
  	console.log();
  }

  getPokemon(id):Observable<any>{
  return this.http.get(this.pokeApiUrl+'pokemon/'+id).pipe ( map(res=> res));
}

}