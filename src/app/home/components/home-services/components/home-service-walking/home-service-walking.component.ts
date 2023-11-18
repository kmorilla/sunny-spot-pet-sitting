import { Component } from '@angular/core';
import { WalkingServiceModel } from './home-service-walking.data';
import { IServiceModel } from '../../home-services.model';

@Component({
  selector: 'app-home-service-walking',
  templateUrl: './home-service-walking.component.html',
  styleUrls: [ './home-service-walking.component.scss' ]
})
export class HomeServiceWalkingComponent {
  serviceModel: IServiceModel = WalkingServiceModel;
}
