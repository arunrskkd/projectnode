import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfavcolorComponent } from './viewfavcolor.component';

describe('ViewfavcolorComponent', () => {
  let component: ViewfavcolorComponent;
  let fixture: ComponentFixture<ViewfavcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfavcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfavcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
