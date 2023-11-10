import { Component, Input } from '@angular/core';
import { PetSittingDataServiceCards } from './home-service-pet-sitting.data';
import { IServiceCard } from '../home-service-card/home-service-card.model';

@Component({
  selector: 'app-home-service-pet-sitting',
  templateUrl: './home-service-pet-sitting.component.html',
  styleUrls: ['./home-service-pet-sitting.component.scss']
})
export class HomeServicePetSittingComponent {
  @Input() showSecondVersion: boolean = false;

  serviceCards: IServiceCard[] = PetSittingDataServiceCards;
}
