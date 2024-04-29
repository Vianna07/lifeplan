import { Component } from '@angular/core';
import { CurrencyQuotationComponent } from '../../components/currency-quotation/currency-quotation.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    NavBarComponent,
    CurrencyQuotationComponent,
  ],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {

}
