import { Component } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';


@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    NavMenuComponent
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {

}
