import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairyTernComponent } from './fairy-tern.component';

describe('FairyTernComponent', () => {
  let component: FairyTernComponent;
  let fixture: ComponentFixture<FairyTernComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FairyTernComponent]
    });
    fixture = TestBed.createComponent(FairyTernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
