import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestineComponent } from './palestine.component';

describe('PalestineComponent', () => {
  let component: PalestineComponent;
  let fixture: ComponentFixture<PalestineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalestineComponent]
    });
    fixture = TestBed.createComponent(PalestineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
