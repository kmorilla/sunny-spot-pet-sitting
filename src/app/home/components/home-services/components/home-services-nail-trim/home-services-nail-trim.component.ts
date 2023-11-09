import { Component } from '@angular/core';
import { NailTrimDataServiceCards } from './home-services-nail-trim.data';
import { IServiceCard } from '../home-service-card/home-service-card.model';

@Component({
  selector: 'app-home-services-nail-trim',
  templateUrl: './home-services-nail-trim.component.html',
  styleUrls: ['./home-services-nail-trim.component.scss']
})
export class HomeServicesNailTrimComponent {
  serviceCards: IServiceCard[] = NailTrimDataServiceCards;
}
