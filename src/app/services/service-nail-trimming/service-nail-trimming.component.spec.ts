import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNailTrimmingComponent } from './service-nail-trimming.component';

describe('ServiceNailTrimmingComponent', () => {
  let component: ServiceNailTrimmingComponent;
  let fixture: ComponentFixture<ServiceNailTrimmingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceNailTrimmingComponent]
    });
    fixture = TestBed.createComponent(ServiceNailTrimmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
