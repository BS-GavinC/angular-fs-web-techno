import { Component } from '@angular/core';
import { pokemon } from '../shared/models/pokemon';
import { PokeService } from '../shared/services/poke/poke.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  monMessage : string = ''

  monPokemon! : pokemon

  constructor(private _pokeService : PokeService){}

  searchPikachu(){

    this.monMessage = 'Loading...'

    this._pokeService.GetPikachu().subscribe({
      next : (data) => {

        this.monMessage = ''
        this.monPokemon = data

      },
      error : (err) => {

        console.log(err);


        this.monMessage = 'Erreur recue : ' + err.error


      },
      complete() {

        console.log('complete');

      }
    })

  }

}
