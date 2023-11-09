import { Component, Input } from '@angular/core';
import { IServiceCard } from './home-service-card.model';

@Component({
  selector: 'app-home-service-card',
  templateUrl: './home-service-card.component.html',
  styleUrls: ['./home-service-card.component.scss']
})
export class HomeServiceCardComponent {
  @Input() serviceCard!: IServiceCard;
}
