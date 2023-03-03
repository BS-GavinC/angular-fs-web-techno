import { Component } from '@angular/core';
import { ObservableService } from '../shared/services/observable/observable.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {

  valueInput! : string;

  constructor(private _observableService : ObservableService){}

  emettreMessage(){
    this._observableService.sendMessage(this.valueInput)
  }

  emettreErreur(){
    this._observableService.sendError(this.valueInput)
  }

  emettreComplete(){
    this._observableService.sendComplete()
  }

}
