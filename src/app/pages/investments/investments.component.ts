import { Component } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { CurrencyQuotationComponent } from '../../components/currency-quotation/currency-quotation.component';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    NavMenuComponent,
    CurrencyQuotationComponent,
  ],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {

}
