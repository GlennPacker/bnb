import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      property: new FormControl(),
    })
    component.hint = 'hint';
    component.label = 'label';
    component.prop = 'property';
    component.validationRulesAndMessages = null;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
