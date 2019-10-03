import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollContextVariableComponent } from './scroll-context-variable.component';

describe('ScrollContextVariableComponent', () => {
  let component: ScrollContextVariableComponent;
  let fixture: ComponentFixture<ScrollContextVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollContextVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollContextVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
