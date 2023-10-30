import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivitiesContainerComponent } from './activities-container.component';

describe('ActivitiesContainerComponent', () => {
  let component: ActivitiesContainerComponent;
  let fixture: ComponentFixture<ActivitiesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesContainerComponent],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ActivitiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
