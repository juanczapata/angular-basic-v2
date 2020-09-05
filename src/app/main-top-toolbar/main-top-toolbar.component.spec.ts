import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopToolbarComponent } from './main-top-toolbar.component';

describe('MainTopToolbarComponent', () => {
  let component: MainTopToolbarComponent;
  let fixture: ComponentFixture<MainTopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTopToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
