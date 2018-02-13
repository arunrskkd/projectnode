import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomernumbereditComponent } from './customernumberedit.component';

describe('CustomernumbereditComponent', () => {
  let component: CustomernumbereditComponent;
  let fixture: ComponentFixture<CustomernumbereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomernumbereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomernumbereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
