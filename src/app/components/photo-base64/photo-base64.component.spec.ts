import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBase64Component } from './photo-base64.component';

describe('PhotoBase64Component', () => {
  let component: PhotoBase64Component;
  let fixture: ComponentFixture<PhotoBase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBase64Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
