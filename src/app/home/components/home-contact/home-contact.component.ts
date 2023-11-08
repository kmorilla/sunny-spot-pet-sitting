import { Component } from '@angular/core';
import { IContactInfo } from './home-contact.model';
import { ContactInfosConst } from './home-contact.data';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent {
  contactInfos: IContactInfo[] = ContactInfosConst;
}
