import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaratedComponent } from './declarated.component';

describe('DeclaratedComponent', () => {
  let component: DeclaratedComponent;
  let fixture: ComponentFixture<DeclaratedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclaratedComponent]
    });
    fixture = TestBed.createComponent(DeclaratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
