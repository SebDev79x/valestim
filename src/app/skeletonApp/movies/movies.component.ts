import { Component, OnInit } from '@angular/core';
import { GetmoviesService } from './services-movies/getmovies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  horrorMoviesList: any;
  constructor(public getMovies: GetmoviesService) { }

  /* LIFE CYCLES */
  ngOnInit(): void {
    this.getAllMovies();
  }
  ngOnDestroy(): void {
    this.getMovies.getHorrorMovies().unsubscribe()
  }

  /* FUNCTIONS */
  getAllMovies() {
    return this.getMovies.getHorrorMovies().subscribe((data: any) => {
      this.horrorMoviesList = data.results.map((element: any) => {
        console.log("element", element)
        return element
      });
      return this.horrorMoviesList
    })
  }
}
