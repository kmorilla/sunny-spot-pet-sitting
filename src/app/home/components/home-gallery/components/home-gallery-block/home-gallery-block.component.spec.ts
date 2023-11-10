import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGalleryBlockComponent } from './home-gallery-block.component';

describe('HomeGalleryBlockComponent', () => {
  let component: HomeGalleryBlockComponent;
  let fixture: ComponentFixture<HomeGalleryBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGalleryBlockComponent]
    });
    fixture = TestBed.createComponent(HomeGalleryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
