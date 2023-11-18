import { Component } from '@angular/core';
import { ContactInfoModels } from './footer.data';
import { IContactInfoModel } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactInfos: IContactInfoModel[] = ContactInfoModels;
}
