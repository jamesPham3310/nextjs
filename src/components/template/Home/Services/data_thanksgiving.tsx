import CarSVG from '@/assets/icons/car.svg';
import ComputerSVG from '@/assets/icons/computer-laptop.svg';
import GymSVG from '@/assets/icons/gym.svg';
import HoursConciergeSVG from '@/assets/icons/hours-concierge-service.svg';
import PoolSVG from '@/assets/icons/pool.svg';
import RootGardenSVG from '@/assets/icons/roof-garden.svg';
import MultiStarSVG from '@/assets/icons/value-maximiser.svg';
import { TItem } from './data';

export const dataThanksgiving: Array<TItem> = [
  {
    icon: <CarSVG />,
    content: 'Free Parking',
  },
  {
    icon: <CarSVG />,
    content: 'EV Car Charger',
  },
  {
    icon: <HoursConciergeSVG />,
    content: '24 hours Concierge Service',
  },
  {
    icon: <RootGardenSVG />,
    content: 'Roof Garden',
  },
  {
    icon: <PoolSVG />,
    content: 'Pool',
  },

  {
    icon: <GymSVG />,
    content: 'Gym',
  },
  {
    icon: <MultiStarSVG />,
    content: 'Privating Meeting Room',
  },
  {
    icon: <ComputerSVG />,
    content: 'Co-working Space',
  },
  {
    icon: <ComputerSVG />,
    content: 'Laptop Friendly Workspace',
  },
];
