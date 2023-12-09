import { ContactInfoConstant } from '../constants/contact-info.constant';
import { IContactInfoModel } from './footer.model';

export const ContactInfoModels: IContactInfoModel[] = [
  {
    matIcon: 'phone_iphone',
    info: ContactInfoConstant.phone,
    isLink: false
  }, {
    matIcon: 'launch',
    info: 'Time to Pet',
    isLink: true,
    link: 'https://www.timetopet.com/portal/sunnyspot'
  }, {
    matIcon: 'place',
    info: ContactInfoConstant.address,
    isLink: false
  }
];
