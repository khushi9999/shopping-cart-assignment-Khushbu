import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
     FormsModule, NgbModule,CommonModule


  ]

})
export class HomeModule { }
