import { IContactInfo } from './home-contact.model';
import { ContactInfoConstant } from '../../../constants/contact-info.constant';

export const ContactInfosConst: IContactInfo[] = [
  {
    matIcon: 'phone_iphone',
    info: ContactInfoConstant.phone
  }, {
    matIcon: 'place',
    info: ContactInfoConstant.address
  }
];
