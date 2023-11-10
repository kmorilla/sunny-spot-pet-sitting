import { Component, Input } from '@angular/core';
import { NailTrimDataServiceCards, NailTrimDataServiceCards2 } from './home-services-nail-trim.data';
import { IServiceCard } from '../home-service-card/home-service-card.model';

@Component({
  selector: 'app-home-services-nail-trim',
  templateUrl: './home-services-nail-trim.component.html',
  styleUrls: ['./home-services-nail-trim.component.scss']
})
export class HomeServicesNailTrimComponent {
  @Input() showSecondVersion: boolean = false;

  serviceCards: IServiceCard[] = NailTrimDataServiceCards;
  serviceCards2: IServiceCard[] = NailTrimDataServiceCards2;
}
