import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutationPageComponent } from './mutation-page.component';

describe('MutationPageComponent', () => {
  let component: MutationPageComponent;
  let fixture: ComponentFixture<MutationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutationPageComponent]
    });
    fixture = TestBed.createComponent(MutationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
