import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPageComponent } from './shell-page.component';

describe('ShellPageComponent', () => {
  let component: ShellPageComponent;
  let fixture: ComponentFixture<ShellPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellPageComponent]
    });
    fixture = TestBed.createComponent(ShellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
