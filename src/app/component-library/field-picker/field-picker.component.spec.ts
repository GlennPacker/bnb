import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldPickerComponent } from './field-picker.component';

describe('FieldPickerComponent', () => {
  let component: FieldPickerComponent;
  let fixture: ComponentFixture<FieldPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldPickerComponent],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FieldPickerComponent);
    component = fixture.componentInstance;
    component.schema = {
      fieldData: [],
      form: {} as FormGroup
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
