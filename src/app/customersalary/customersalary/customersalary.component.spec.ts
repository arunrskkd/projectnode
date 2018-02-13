import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersalaryComponent } from './customersalary.component';

describe('CustomersalaryComponent', () => {
  let component: CustomersalaryComponent;
  let fixture: ComponentFixture<CustomersalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
