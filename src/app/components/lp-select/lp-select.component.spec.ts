import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpSelectComponent } from './lp-select.component';

describe('LpSelectComponent', () => {
  let component: LpSelectComponent;
  let fixture: ComponentFixture<LpSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
