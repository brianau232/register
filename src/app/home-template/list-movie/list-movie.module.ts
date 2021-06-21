import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMovieRoutingModule } from './list-movie-routing.module';
import { ListMovieComponent } from './list-movie.component';


@NgModule({
  declarations: [
    ListMovieComponent
  ],
  imports: [
    CommonModule,
    ListMovieRoutingModule
  ]
})
export class ListMovieModule { }
