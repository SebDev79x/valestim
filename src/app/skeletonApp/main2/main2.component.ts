import { Component, OnInit } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { MediaObserverService } from 'src/app/global-services/media-observer.service';
import { ITile } from 'src/app/interfaces/tile';
@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss']
})
export class Main2Component implements OnInit {
  sub: Subscription;
  device: string;


  constructor(private mediaOService:MediaObserverService) { }

  ngOnInit(): void {
    this.sub = this.mediaOService.deviceSize().asObservable().subscribe((format: MediaChange[]) => {
      this.device = format[0].mqAlias

    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
