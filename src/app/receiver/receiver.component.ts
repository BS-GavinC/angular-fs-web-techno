import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, pipe, filter, tap, map } from 'rxjs';
import { ObservableService } from '../shared/services/observable/observable.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit, OnDestroy {

  messageReceive : string = ''

  observer! : Subscription;

  constructor(private _observableService : ObservableService){}

  ngOnInit(): void {

    this.observer = this._observableService.monSubject.pipe(map(x => x + ' Et Mon Pipe')).subscribe(
      {
        next : (message) => {
          this.messageReceive = message

        },
        error : (message) => {
          console.error(message);

        },
        complete : () => {
          this.messageReceive = 'C\'est finito'
        }
      }

    )

  }

  ngOnDestroy(): void {

    this.observer.unsubscribe()

  }

}
