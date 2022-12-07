import { Routes } from '@angular/router';
import { KGComponent } from './kg/kg.component';

export const DepartmentRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'kg',
        component: KGComponent
    },
    ]
}];
