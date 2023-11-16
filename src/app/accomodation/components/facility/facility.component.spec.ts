import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Facility from '../../models/Facility';
import { FacilityComponent } from './facility.component';

describe('FacilityComponent', () => {
  let component: FacilityComponent;
  let fixture: ComponentFixture<FacilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityComponent],
      schemas:[NO_ERRORS_SCHEMA],      
    });
    fixture = TestBed.createComponent(FacilityComponent);
    component = fixture.componentInstance;
    component.facility = <Facility>{
      tooltip: 'tooltip',
      icon: 'icon',
    }; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use teh tooltip correctly when provided', () => {
    const icon = fixture.debugElement.query(By.css('.icon'));

    expect(icon.properties.fontIcon).toBeTruthy();
    expect(icon.properties.fontIcon).toBe('icon');
  });
});
