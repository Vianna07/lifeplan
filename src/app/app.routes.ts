import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FinanceComponent } from './pages/finance/finance.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path:'finance/teste',
         component: FinanceComponent
    }
];
