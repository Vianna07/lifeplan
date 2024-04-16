import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    //{
        //path: '**',
       // component: HomeComponent,
   // },
    {
        path: '',
        component: InvestmentsComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
        path: 'finance',
        component: FinanceComponent,
        children: [
          {
            path: 'investments',
            component: InvestmentsComponent
          }
        ]
    },
];
