import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pokemon } from '../../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private _httpClient : HttpClient) { }

  GetPikachu() : Observable<pokemon> {

    // Minimum legal
    // return this._httpClient.get<pokemon>('https://pokeapi.co/api/v2/pokemon/pikachu')

    return this._httpClient.get<pokemon>('https://pokeapi.co/api/v2/pokemon/pikachu')
    .pipe(map(x => {
      return {
          ...x, // spread operator to copy all properties from original object
          height: x.height * 10, // modify height property by doubling its value
          weight: x.weight / 10 // modify weight property by halving its value
          };
        }
    ))

  }

}
