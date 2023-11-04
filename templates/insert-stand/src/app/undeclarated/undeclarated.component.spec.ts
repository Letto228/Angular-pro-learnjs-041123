import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndeclaratedComponent } from './undeclarated.component';

describe('UndeclaratedComponent', () => {
  let component: UndeclaratedComponent;
  let fixture: ComponentFixture<UndeclaratedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UndeclaratedComponent]
    });
    fixture = TestBed.createComponent(UndeclaratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
