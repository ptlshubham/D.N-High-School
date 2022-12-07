import { Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { FacilityComponent } from './facility/facility.component';
import { HistoryComponent } from './history/history.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { StructureComponent } from './structure/structure.component';

export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'facility',
        component: FacilityComponent
    },
    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'structure',
        component: StructureComponent
    },
    ]
}];
