import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTableComponent } from './second-table.component';

describe('SecondTableComponent', () => {
  let component: SecondTableComponent;
  let fixture: ComponentFixture<SecondTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondTableComponent]
    });
    fixture = TestBed.createComponent(SecondTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
