import { DummyImageConstant } from '../../../../../constants/image.constant';
import { IServiceModel } from '../../home-services.model';

export const PetSittingDataServiceModels: IServiceModel[] = [
  {
    image: 'CAT-SITTING2 (1)(1).jpg',
    title: 'Cat Sitting',
    price: 'Starts at $30. Offering, 30, 45, & 60 minutes',
    description: [
      'Kitties are my specialty! I drop by your home to provide fresh food & water for your cats, and scoop the litter box at every drop-in. Each cat has a different personality and different needs. I will play & give attention to your cat, if they are outgoing. And if they are shy and prefer to be left alone, I will give them their space. I can also collect your mail, water your houseplants, & pull your trash bin to the curb. Standard drop-in visit is 30 minutes. At every drop-in I will notify you of my arrival and departure and send photo updates of your cats.',
    ],
    blob: '65% 35% 65% 35% / 60% 50% 50% 30%'
  }, {
    image: 'pet-sitting.jpg',
    title: 'Pet Sitting',
    price: 'Starts at $30. Offering, 30, 45, & 60 minutes',
    description: [
      `I drop by your home to feed & water your pets, provide a potty break, as well as play & give attention to your pets.
    I can also collect your mail, water your houseplants, & pull your trash bin to the curb.
    Standard drop-in visit is 30 minutes. A 10 or 15 minute long dog walk can be included upon request.
    At every drop-in I will notify you of my arrival and departure and send photo updates of your pets.`
    ],
    blob: '50% 50% 80% 35% / 40% 80% 40% 80%'
  },
  // {
  //   image: DummyImageConstant,
  //   title: 'Overnight Stay',
  //   price: '$150',
  //   description: [
  //     `I stay with your pets overnight in your home to provide food, attention & human companionship while their favorite human (you) are away.
  //     Overnight stays start in the evening around 8pm & end the next morning around 8am.
  //     The overnight stay also includes a 1 hour midday drop-in usually sometime between 12pm - 2pm.`,
  //     '*I only guarantee to provide these 13 hours of care a day for your pets. However, if I am available and able to, I will stay longer with your pets during the day at no extra charge.',
  //     'Price includes 3 pets, +$5.',
  //     `If your pets need additional care throughout the day, drop-ins can be scheduled.
  //     The Bed & Breakfast Service is another alternative for extended care without me staying overnight.
  //     I also have a Live-in Service which guarantees your pet will not be alone for more than four hours at a time.
  //     For the live-in service, I charge $240 for each 24 hour period.`
  //   ],
  //   blob: '60% 40% 60% 40% / 60% 80% 35% 65%'
  // },
  // {
  //   image: DummyImageConstant,
  //   title: 'Bed & Breakfast',
  //   price: '$80',
  //   description: [
  //     `Also called an "Almost Overnight," my Bed & Breakfast service includes two 1.5 hour drop-ins, one at bedtime and the other the next morning.
  //     These drop-ins typically take place at 8pm - 9:30pm and 8am - 9:30am.
  //     This is a good option if you would like extended care but don’t need me to stay overnight.`
  //   ],
  //   blob: '45% 55% 65% 35% / 30% 60% 40% 60%'
  // }
];
