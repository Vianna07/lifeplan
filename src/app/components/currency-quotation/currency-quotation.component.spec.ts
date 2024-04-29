import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyQuotationComponent } from './currency-quotation.component';

describe('CurrencyQuotationComponent', () => {
  let component: CurrencyQuotationComponent;
  let fixture: ComponentFixture<CurrencyQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyQuotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
