import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePetSittingComponent } from './service-pet-sitting.component';

describe('ServicePetSittingComponent', () => {
  let component: ServicePetSittingComponent;
  let fixture: ComponentFixture<ServicePetSittingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePetSittingComponent]
    });
    fixture = TestBed.createComponent(ServicePetSittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
