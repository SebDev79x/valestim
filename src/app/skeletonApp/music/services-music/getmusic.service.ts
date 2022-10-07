import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmusicService {
  API_URL = "https://jsonplaceholder.typicode.com/albums";

  constructor(public http: HttpClient) {
    console.log("SERVICE", this.getMusicAlbums());

  }

  public getMusicAlbums(): any {
    return this.http.get(this.API_URL)
  }
}
