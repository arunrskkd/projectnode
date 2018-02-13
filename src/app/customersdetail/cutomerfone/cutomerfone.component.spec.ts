import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerfoneComponent } from './cutomerfone.component';

describe('CutomerfoneComponent', () => {
  let component: CutomerfoneComponent;
  let fixture: ComponentFixture<CutomerfoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerfoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerfoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
