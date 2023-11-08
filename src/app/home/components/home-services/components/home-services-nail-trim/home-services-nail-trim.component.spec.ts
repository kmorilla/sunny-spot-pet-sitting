import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicesNailTrimComponent } from './home-services-nail-trim.component';

describe('HomeServicesNailTrimComponent', () => {
  let component: HomeServicesNailTrimComponent;
  let fixture: ComponentFixture<HomeServicesNailTrimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeServicesNailTrimComponent]
    });
    fixture = TestBed.createComponent(HomeServicesNailTrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
