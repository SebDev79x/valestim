import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MediaObserverService } from 'src/app/global-services/media-observer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  sub: Subscription;
  device: string;
  style:any

  constructor(private mediaOService: MediaObserverService) { }

  ngOnInit(): void {
    this.sub = this.mediaOService.deviceSize().asObservable().subscribe((format: MediaChange[]) => {

      this.device = format[0].mqAlias
      console.log("FORMAT",this.device);

    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
