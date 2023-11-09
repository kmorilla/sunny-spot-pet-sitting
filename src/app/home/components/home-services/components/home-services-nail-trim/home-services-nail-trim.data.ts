import { DummyImageConstant } from '../../../../../constants/image.constant';
import { IServiceCard } from '../home-service-card/home-service-card.model';

export const NailTrimDataServiceCards: IServiceCard[] = [
  {
    image: DummyImageConstant,
    title: 'The Puppy Dog',
    price: '$35',
    description: [ 'Includes nail trim & nail grinding & ear cleaning' ]
  }, {
    image: DummyImageConstant,
    title: 'Puppy Dog Plus',
    price: '$40',
    description: [ 'Includes nail trim & nail grinding, ear cleaning, <span class="primary-color">PLUS</span> paw balm & scented spritz' ]
  }, {
    image: DummyImageConstant,
    title: 'Dapper Dog',
    price: '$45',
    description: [ 'Includes nail trim & nail grinding, ear cleaning, paw balm & scented spritz, <span class="primary-color">PLUS</span> breathe refresh gel' ]
  }, {
    image: DummyImageConstant,
    title: 'Purr-fect Paws',
    price: '$35',
    description: [ 'Don\'t forget the cats! Includes nail trim & ear cleaning (using cat safe wipes)' ]
  }
];
