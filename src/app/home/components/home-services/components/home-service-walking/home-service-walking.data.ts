import { IServiceCard } from '../home-service-card/home-service-card.model';
import { DummyImageConstant } from '../../../../../constants/image.constant';

export const WalkingServiceCards: IServiceCard[] = [
  {
    image: DummyImageConstant,
    title: 'Dog Walking',
    price: '$35',
    description: [
      `I come to your home to take your dog on a private walk around your neighborhood.
      I walk your dog one-on-one to provide individual attention.
      Your dog can investigate all the new smells, go potty, & get some of those wiggles out.`
    ]
  }
]
