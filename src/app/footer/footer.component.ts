import { Component } from '@angular/core';
import { IContactInfo } from '../home/components/home-contact/home-contact.model';
import { ContactInfosConst } from '../home/components/home-contact/home-contact.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactInfos: IContactInfo[] = ContactInfosConst;
}
