import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicePetSittingComponent } from './home-service-pet-sitting.component';

describe('HomeServicePetSittingComponent', () => {
  let component: HomeServicePetSittingComponent;
  let fixture: ComponentFixture<HomeServicePetSittingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeServicePetSittingComponent]
    });
    fixture = TestBed.createComponent(HomeServicePetSittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
