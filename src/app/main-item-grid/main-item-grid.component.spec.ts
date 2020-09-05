import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemGridComponent } from './main-item-grid.component';

describe('MainItemGridComponent', () => {
  let component: MainItemGridComponent;
  let fixture: ComponentFixture<MainItemGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
