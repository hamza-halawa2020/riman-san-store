import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowPassComponent } from './hide-show-pass.component';

describe('HideShowPassComponent', () => {
  let component: HideShowPassComponent;
  let fixture: ComponentFixture<HideShowPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HideShowPassComponent]
    });
    fixture = TestBed.createComponent(HideShowPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
