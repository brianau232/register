import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { KhoaHocComponent } from './khoahoc/khoa-hoc/khoa-hoc.component';


@NgModule({
  declarations: [
    HomeComponent,
    KhoaHocComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
