import { Component } from '@angular/core';
import { IContactInfo, IExperience, IPackage } from '../models/home.model';
import { ContactInfoConstant } from '../constant/contact-info.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  experiences: IExperience[] = ExperiencesConst;
  experienceData: IExperience[][] = [];
  nailTrimPackages: IPackage[] = NailTrimPackagesConst;
  contactInfos: IContactInfo[] = ContactInfosConst;

  ngOnInit(): void {
    this.getExperienceData();
  }

  getExperienceData(): void {
    let splitCol = 3;
    let splitNumber = Math.ceil(this.experiences.length / splitCol);
    let splitCount = 1;

    for (let i = 0; i < splitNumber; i++) {
      let end = splitCount != splitNumber ? splitNumber * splitCount : undefined;
      let data = this.experiences.slice(i * splitNumber, end);
      this.experienceData.push(data);
      splitCount++;
    }
  }

  protected readonly ContactInfoConstant = ContactInfoConstant;
}

const ExperiencesConst: IExperience[] = [
  {
    title: '16+',
    subTitle: 'Years in the Animal Care Industry'
  }, {
    title: '10+',
    subTitle: 'Years experience as a Dog Groomer'
  }, {
    title: 'Associate Degree',
    subTitle: 'in Animal Science'
  }, {
    title: '5+',
    subTitle: 'Years as a volunteer at an animal rescue'
  }, {
    title: 'Pet First Aid',
    subTitle: 'Certified'
  }, {
    title: 'AKC S.A.F.E.',
    subTitle: 'Certified'
  }, {
    title: 'Licensed',
    subTitle: 'In the city of Roseville'
  }, {
    title: 'Insured',
    subTitle: 'With Pet Care Business Insurance'
  }
];

const NailTrimPackagesConst: IPackage[] = [
  {
    image: 'assets/img/dummy-image-square.jpg',
    title: 'The Puppy Dog',
    price: 35,
    description: 'Includes nail trim & nail grinding & ear cleaning'
  }, {
    image: 'assets/img/dummy-image-square.jpg',
    title: 'Puppy Dog Plus',
    price: 40,
    description: 'Includes nail trim & nail grinding, ear cleaning, <span class="primary-color">PLUS</span> paw balm & scented spritz'
  }, {
    image: 'assets/img/dummy-image-square.jpg',
    title: 'Dapper Dog',
    price: 45,
    description: 'Includes nail trim & nail grinding, ear cleaning, paw balm & scented spritz, <span class="primary-color">PLUS</span> breathe refresh gel'
  }, {
    image: 'assets/img/dummy-image-square.jpg',
    title: 'Purr-fect Paws',
    price: 35,
    description: 'Don\'t forget the cats! Includes nail trim & ear cleaning (using cat safe wipes)'
  }
];

const ContactInfosConst: IContactInfo[] = [
  {
    matIcon: 'phone_iphone',
    info: ContactInfoConstant.phone
  }, {
    matIcon: 'place',
    info: ContactInfoConstant.address
  }
];
