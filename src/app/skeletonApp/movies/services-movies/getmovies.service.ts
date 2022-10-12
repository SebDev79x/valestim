import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map, range, mergeMap, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  TMDB_API_KEY: string = "f51d26c302e2a9dd30537d30f7be9750"
  API_URL_POP_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${this.TMDB_API_KEY}&language=en-US`;
  API_URL_HORROR_MOVIES = `  https://api.themoviedb.org/3/discover/movie?api_key=${this.TMDB_API_KEY}&with_genres=27`;

  constructor(public http: HttpClient) {}

  public getHorrorMovies(): any {
    return this.http.get(`${this.API_URL_HORROR_MOVIES}`)
  }
}

