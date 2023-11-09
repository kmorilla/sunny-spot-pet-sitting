import { Component } from '@angular/core';
import { PetSittingDataServiceCards } from '../home-service-pet-sitting/home-service-pet-sitting.data';
import { IServiceCard } from '../home-service-card/home-service-card.model';
import { WalkingServiceCards } from './home-service-walking.data';

@Component({
  selector: 'app-home-service-walking',
  templateUrl: './home-service-walking.component.html',
  styleUrls: ['./home-service-walking.component.scss']
})
export class HomeServiceWalkingComponent {
    serviceCards: IServiceCard[] = WalkingServiceCards;
}
