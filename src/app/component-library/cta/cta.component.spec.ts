import { ComponentFixture, TestBed } from '@angular/core/testing';

import Cta from '../models/cta';
import { CtaComponent } from './cta.component';

describe('CtaComponent', () => {
  let component: CtaComponent;
  let fixture: ComponentFixture<CtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaComponent]
    });
    fixture = TestBed.createComponent(CtaComponent);
    component = fixture.componentInstance;
    component.cta = <Cta>{
      title: 'title Abc',
      alt: 'alt Abc',
      src: 'src Abc',
      paras: [
        'para Abc',
        'para Def',
      ]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
