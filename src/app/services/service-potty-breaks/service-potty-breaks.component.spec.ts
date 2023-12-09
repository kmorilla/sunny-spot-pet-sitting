import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePottyBreaksComponent } from './service-potty-breaks.component';

describe('ServicePottyBreaksComponent', () => {
  let component: ServicePottyBreaksComponent;
  let fixture: ComponentFixture<ServicePottyBreaksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePottyBreaksComponent]
    });
    fixture = TestBed.createComponent(ServicePottyBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
