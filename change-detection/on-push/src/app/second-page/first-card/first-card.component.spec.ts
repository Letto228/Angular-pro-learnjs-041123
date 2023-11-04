import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCardComponent } from './first-card.component';

describe('FirstCardComponent', () => {
  let component: FirstCardComponent;
  let fixture: ComponentFixture<FirstCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstCardComponent]
    });
    fixture = TestBed.createComponent(FirstCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
