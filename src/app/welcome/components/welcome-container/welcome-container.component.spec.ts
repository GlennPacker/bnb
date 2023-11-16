import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeContainerComponent } from './welcome-container.component';

describe('WelcomeContainerComponent', () => {
  let component: WelcomeContainerComponent;
  let fixture: ComponentFixture<WelcomeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeContainerComponent],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(WelcomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
