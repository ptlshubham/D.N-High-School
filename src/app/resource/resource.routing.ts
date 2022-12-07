import { Routes } from '@angular/router';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PrayerListComponent } from './prayer-list/prayer-list.component';
import { ProjectComponent } from './project/project.component';
import { ResultComponent } from './result/result.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { WebResourceComponent } from './web-resource/web-resource.component';

export const ResourceRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'web',
        component: WebResourceComponent
    },
    {
        path: 'prayer',
        component: PrayerListComponent
    },
    {
        path: 'holiday',
        component: HolidayListComponent
    },
    {
        path: 'photo',
        component: PhotoComponent
    },
    {
        path: 'result',
        component: ResultComponent
    },
    {
        path: 'material',
        component: StudyMaterialComponent
    },
    
    {
        path: 'project',
        component: ProjectComponent
    },
    ]
}];
