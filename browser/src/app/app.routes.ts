import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { LifeProjectComponent } from './pages/life-project/life-project.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
      path: 'finance',
      component: FinanceComponent,
  },
  {
    path: 'finance/investments',
    component: InvestmentsComponent,
  },
  {
    path: 'life-project',
    component: LifeProjectComponent,
  },
  {
      path: '**',
      component: NotFoundComponent,
  },
];
