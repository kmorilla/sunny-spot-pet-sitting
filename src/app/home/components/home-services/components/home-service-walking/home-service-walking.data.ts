import { DummyImageConstant } from '../../../../../constants/image.constant';
import { IServiceModel } from '../../home-services.model';

export const WalkingServiceModel: IServiceModel = {
  image: DummyImageConstant,
  title: 'Dog Walking',
  price: '$35',
  description: [
    `Every dog loves a walk. I offer private walks around the neighborhood.
            Whether your dog needs to go potty while you're at work or needs exercise to get some of that energy out,
            I have a service to fit.`,
    `I come to your home to take your dog on a private walk around your neighborhood.
      I walk your dog one-on-one to provide individual attention.
      Your dog can investigate all the new smells, go potty, & get some of those wiggles out.`,
    'LIMITED SPOTS AVAILABLE'
  ]
};

