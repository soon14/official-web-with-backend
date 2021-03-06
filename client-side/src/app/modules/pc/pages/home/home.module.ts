import { NgModule } from '@angular/core';
import {NzButtonModule, NzCarouselModule, NzGridModule} from "ng-zorro-antd";

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import {PcSharedModule} from '@pc/shared/pc-shared.module';
import {CommonModule} from "@angular/common";
import {NzSpaceModule} from "ng-zorro-antd/space";

@NgModule({
  declarations: [HomeComponent, HomeCarouselComponent],
  imports: [
    CommonModule,
    PcSharedModule,
    HomeRoutingModule,
    NzCarouselModule,
    NzButtonModule,
    NzGridModule,
    NzSpaceModule
  ],
})
export class HomeModule { }
