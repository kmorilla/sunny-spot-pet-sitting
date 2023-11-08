import { Component } from '@angular/core';
import { IServiceCard } from '../../home-services.model';
import { NailTrimData } from './home-services-nail-trim.data';

@Component({
  selector: 'app-home-services-nail-trim',
  templateUrl: './home-services-nail-trim.component.html',
  styleUrls: ['./home-services-nail-trim.component.scss']
})
export class HomeServicesNailTrimComponent {
  nailTrimPackages: IServiceCard[] = NailTrimData;
}
