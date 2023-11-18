import { Component } from '@angular/core';
import { PetSittingDataServiceModels } from './home-service-pet-sitting.data';
import { IServiceModel } from '../../home-services.model';

@Component({
  selector: 'app-home-service-pet-sitting',
  templateUrl: './home-service-pet-sitting.component.html',
  styleUrls: ['./home-service-pet-sitting.component.scss']
})
export class HomeServicePetSittingComponent {
  serviceModels: IServiceModel[] = PetSittingDataServiceModels;
}
