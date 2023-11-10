import { Component, Input } from '@angular/core';
import { PetSittingDataServiceCards } from '../home-service-pet-sitting/home-service-pet-sitting.data';
import { IServiceCard } from '../home-service-card/home-service-card.model';
import { WalkingServiceCards } from './home-service-walking.data';
import { DummyImageConstant } from '../../../../../constants/image.constant';

@Component({
  selector: 'app-home-service-walking',
  templateUrl: './home-service-walking.component.html',
  styleUrls: [ './home-service-walking.component.scss' ]
})
export class HomeServiceWalkingComponent {
  @Input() showSecondVersion: boolean = false;

  serviceCards: IServiceCard[] = WalkingServiceCards;
  img: string = DummyImageConstant;
}
