import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  sub: Subscription;
  deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.sub = this.mediaObserver
      .asObservable()
      .subscribe(
        (change: MediaChange[]) => {
          console.log(change[0].mqAlias);
          this.deviceXs = change[0].mqAlias === 'xs' ? true : false;
        })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
