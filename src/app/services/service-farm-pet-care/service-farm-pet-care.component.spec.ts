import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFarmPetCareComponent } from './service-farm-pet-care.component';

describe('ServiceFarmPetCareComponent', () => {
  let component: ServiceFarmPetCareComponent;
  let fixture: ComponentFixture<ServiceFarmPetCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceFarmPetCareComponent]
    });
    fixture = TestBed.createComponent(ServiceFarmPetCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
