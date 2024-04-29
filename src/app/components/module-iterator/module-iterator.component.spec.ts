import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleIteratorComponent } from './module-iterator.component';

describe('ModuleIteratorComponent', () => {
  let component: ModuleIteratorComponent;
  let fixture: ComponentFixture<ModuleIteratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleIteratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleIteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
