import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { MediaObserverService } from 'src/app/global-services/media-observer.service';
import { GetmusicService } from './services-music/getmusic.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  defaultImage = 'oops.jpg'
  albumsList: any;
  media$:Observable<MediaChange[]>;
  deviceSize: string;
  bgcolor: string;
  constructor(public getAlbums: GetmusicService,public mediaOService: MediaObserverService,media:MediaObserver) {
    this.media$ = media.asObservable()

  }
  /* LIFE CYCLES */
  ngOnInit(): void {
    this.getAllAlbums()
    this.media$.subscribe((mq)=>console.log(mq))
  }
  ngOnDestroy(): void {
    this.getAlbums.getMusicAlbums().unsubscribe()

  }

  /* FUNCTIONS */
  getAllAlbums() {
    return this.getAlbums.getMusicAlbums().subscribe((data: any) => {
      return this.albumsList = data.map((element: any) => {
        return element
      });
    })
  }
}
