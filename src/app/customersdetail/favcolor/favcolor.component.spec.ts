import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavcolorComponent } from './favcolor.component';

describe('FavcolorComponent', () => {
  let component: FavcolorComponent;
  let fixture: ComponentFixture<FavcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
