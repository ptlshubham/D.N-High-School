import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomeRoutes } from './home.routing';
import { RouterModule } from '@angular/router';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { LeftImageTextComponent } from './left-image-text/left-image-text.component';
import { SectionMessageComponent } from './section-message/section-message.component';
import { RightImageTextComponent } from './right-image-text/right-image-text.component';
import { SectionCoursesComponent } from './section-courses/section-courses.component';
import { StatisticsIncrementorComponent } from './statistics-incrementor/statistics-incrementor.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeSliderComponent,
    LeftImageTextComponent,
    SectionMessageComponent,
    RightImageTextComponent,
    SectionCoursesComponent,
    StatisticsIncrementorComponent,
    IndexComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HomeRoutes),
    NgbModule,
  ],
  exports: [
    HomeSliderComponent,
  ]
})
export class HomeModule { }
