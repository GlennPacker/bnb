import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WelcomeGridComponent } from './welcome-grid.component';

describe('WelcomeGridComponent', () => {
  let component: WelcomeGridComponent;
  let fixture: ComponentFixture<WelcomeGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeGridComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(WelcomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
