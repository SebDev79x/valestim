import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetMoviesService } from './services-movies/getmovies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  horrorMoviesList: any;
  sub: Subscription;
  id: number;
  constructor(public getMovies: GetMoviesService, private route: ActivatedRoute) {}

  /* LIFE CYCLES */
  ngOnInit(): void {
    this.allHorrorMovies();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  /* FUNCTIONS */
  allHorrorMovies() {
    return this.sub = this.getMovies.getHorrorMovies().subscribe((data: any) => {
      return this.horrorMoviesList = data.results.map((element: any) => {
        return element
      });
    })
  }
}
