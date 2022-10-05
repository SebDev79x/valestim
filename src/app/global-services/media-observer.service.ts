import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaObserverService {
  constructor(public mediaObserver: MediaObserver) {
  }
  deviceSize = () => {
    return this.mediaObserver
    }
  }

  /*  .asObservable()
   .subscribe(
     (change: MediaChange[]) => {
       console.log("dans le service", change[0].mqAlias);

       return change[0].mqAlias
     }) */


