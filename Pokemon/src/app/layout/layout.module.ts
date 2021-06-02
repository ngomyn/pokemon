import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './page/home/home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { DetailComponent } from './page/detail/detail.component';


@NgModule({
  declarations: [
  HomeComponent,
  DetailComponent
],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IvyCarouselModule
  ]
})
export class LayoutModule { }
