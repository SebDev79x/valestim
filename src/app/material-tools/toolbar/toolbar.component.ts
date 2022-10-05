import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MediaObserverService } from 'src/app/global-services/media-observer.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  sub: Subscription;
  deviceXs: string;
  bgcolor: string;
  constructor(public mediaOService: MediaObserverService) { }
  ngOnInit(): void {
    this.sub = this.mediaOService.deviceSize().asObservable().subscribe((detectChange: MediaChange[]) => {
      this.deviceXs = detectChange[0].mqAlias
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
