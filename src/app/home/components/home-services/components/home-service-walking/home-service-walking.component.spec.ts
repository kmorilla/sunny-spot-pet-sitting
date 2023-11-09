import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceWalkingComponent } from './home-service-walking.component';

describe('HomeServiceWalkingComponent', () => {
  let component: HomeServiceWalkingComponent;
  let fixture: ComponentFixture<HomeServiceWalkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeServiceWalkingComponent]
    });
    fixture = TestBed.createComponent(HomeServiceWalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
