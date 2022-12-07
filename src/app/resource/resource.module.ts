import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebResourceComponent } from './web-resource/web-resource.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ResourceRoutes } from './resource.routing';
import { PrayerListComponent } from './prayer-list/prayer-list.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { PhotoComponent } from './photo/photo.component';
import { ResultComponent } from './result/result.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    WebResourceComponent,
    PrayerListComponent,
    HolidayListComponent,
    PhotoComponent,
    ResultComponent,
    StudyMaterialComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ResourceRoutes),
    NgbModule,
  ]
})
export class ResourceModule { }
