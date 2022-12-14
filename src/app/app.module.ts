import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './skeletonApp/footer/footer.component';
import { HeaderComponent } from './skeletonApp/header/header.component';
import { MainComponent } from './skeletonApp/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './material-tools/sidenav/sidenav.component';
import { ToolbarComponent } from './material-tools/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridComponent } from './material-tools/grid/grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './skeletonApp/page-not-found/page-not-found.component';
import { MoviesComponent } from './skeletonApp/movies/movies.component';
import { HomeComponent } from './skeletonApp/home/home.component';
import { RouterModule } from '@angular/router';
import { MusicComponent } from './skeletonApp/music/music.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardComponent } from './material-tools/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsComponent } from './skeletonApp/movies/movie-details/movie-details.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorService } from './global-services/loader/interceptor.service';
import { Main2Component } from './skeletonApp/main2/main2.component';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    GridComponent,
    PageNotFoundComponent,
    MoviesComponent,
    HomeComponent,
    MusicComponent,
    CardComponent,
    MovieDetailsComponent,
    Main2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      { path: 'movie-details/:id', component: MovieDetailsComponent },
      { path: 'music', component: MusicComponent },
      { path: '**', component: PageNotFoundComponent,pathMatch: 'full' },

    ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
