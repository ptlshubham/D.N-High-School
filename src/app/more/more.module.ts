import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from './campus/campus.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoreRoutes } from './more.routing';
import { SearchComponent } from './search/search.component';
import { EvalutionComponent } from './evalution/evalution.component';
import { LibraryComponent } from './library/library.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { SyllabusComponent } from './syllabus/syllabus.component';



@NgModule({
  declarations: [
    CampusComponent,
    SearchComponent,
    EvalutionComponent,
    LibraryComponent,
    AcademicCalendarComponent,
    MagazineComponent,
    NewsComponent,
    PaperComponent,
    ResultComponent,
    ScholarshipComponent,
    SyllabusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MoreRoutes),
    NgbModule,
    NgxPaginationModule
  ]
})
export class MoreModule { }
