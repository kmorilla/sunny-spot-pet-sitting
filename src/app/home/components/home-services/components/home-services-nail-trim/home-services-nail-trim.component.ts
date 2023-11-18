import { Component } from '@angular/core';
import { NailTrimDataServiceModel } from './home-services-nail-trim.data';
import { IServiceModel } from '../../home-services.model';

@Component({
  selector: 'app-home-services-nail-trim',
  templateUrl: './home-services-nail-trim.component.html',
  styleUrls: ['./home-services-nail-trim.component.scss']
})
export class HomeServicesNailTrimComponent {
  serviceModel: IServiceModel = NailTrimDataServiceModel
}
