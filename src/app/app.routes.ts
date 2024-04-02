import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '**',
        component: NotFoundComponent,
    },
    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path: 'finance',
    //     component: FinanceComponent,
    // }
];
