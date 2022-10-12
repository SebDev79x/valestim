import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IMovie } from 'src/app/interfaces/Imovie';
import { GetMoviesService } from '../services-movies/getmovies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  public id: any;
  public sub: Subscription;
  public movie: IMovie;
  constructor(private route: ActivatedRoute, private getMovies: GetMoviesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

     this.getMovieById(this.id)
/* console.log(this.movieItem, "this.movieItem");
 */

  }
  getMovieById(movieId: any) {
    return this.getMovies.getHorrorMovies().subscribe((data: any) => {
      return data.results.filter((element: any) => {
        if (movieId == element.id) {
           this.movie = element
           return this.movie
        }
        return null
      })
    })
  }
/*   get movieItem(){
return (this.movie) ? this.movie:null
  } */
}
