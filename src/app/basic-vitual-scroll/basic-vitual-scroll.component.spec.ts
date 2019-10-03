import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVitualScrollComponent } from './basic-vitual-scroll.component';

describe('BasicVitualScrollComponent', () => {
  let component: BasicVitualScrollComponent;
  let fixture: ComponentFixture<BasicVitualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVitualScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVitualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
