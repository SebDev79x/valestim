import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './skeletonApp/home/home.component';
import { MoviesComponent } from './skeletonApp/movies/movies.component';
import { PageNotFoundComponent } from './skeletonApp/page-not-found/page-not-found.component';

const routes: Routes = [



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
