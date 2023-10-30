import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryContainerComponent } from './photo-gallery-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PhotoGalleryContainerComponent', () => {
  let component: PhotoGalleryContainerComponent;
  let fixture: ComponentFixture<PhotoGalleryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoGalleryContainerComponent],
      schemas:[NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PhotoGalleryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
