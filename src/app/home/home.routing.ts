import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';

export const HomeRoutes: Routes = [{
    path: '',
    children: [
        {
            path: '',
            component: IndexComponent
        },
        {
            path: 'main',
            component: MainComponent
        },

    ]
}];
