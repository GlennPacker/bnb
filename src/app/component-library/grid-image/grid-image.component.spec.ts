import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GridImageComponent } from './grid-image.component';

describe('GridImageComponent', () => {
  let component: GridImageComponent;
  let fixture: ComponentFixture<GridImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridImageComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GridImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
