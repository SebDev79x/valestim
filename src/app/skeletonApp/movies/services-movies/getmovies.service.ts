import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map, range, mergeMap, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {
  TMDB_API_KEY: string = "f51d26c302e2a9dd30537d30f7be9750"
  API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${this.TMDB_API_KEY}&language=en-US`;

  constructor(public http: HttpClient) {
    console.log("SERVICE", this.getHorrorMovies());

  }

  public getHorrorMovies(): any {
    return this.http.get(`${this.API_URL}`)
  }
}

