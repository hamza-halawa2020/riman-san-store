import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carusol2Component } from './carusol2.component';

describe('Carusol2Component', () => {
  let component: Carusol2Component;
  let fixture: ComponentFixture<Carusol2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carusol2Component]
    });
    fixture = TestBed.createComponent(Carusol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
