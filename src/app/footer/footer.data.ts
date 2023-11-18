import { ContactInfoConstant } from '../constants/contact-info.constant';
import { IContactInfoModel } from './footer.model';

export const ContactInfoModels: IContactInfoModel[] = [
  {
    matIcon: 'phone_iphone',
    info: ContactInfoConstant.phone
  }, {
    matIcon: 'place',
    info: ContactInfoConstant.address
  }
];
