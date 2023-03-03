import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  monSubject : BehaviorSubject<string> = new BehaviorSubject<string>('Rien a signaler')

  sendMessage(message : string){

    console.log('J\'emmet un message !');

    this.monSubject.next(message)

  }

  sendError(message : string){
    this.monSubject.error(message)
  }


  sendComplete(){
    this.monSubject.complete()
  }

}
