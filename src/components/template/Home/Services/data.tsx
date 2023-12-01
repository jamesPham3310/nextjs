import { ReactElement } from 'react';

import UserSingleMaleSVG from '@/assets/icons/friendly-customer-service.svg';
import CalendarCheckSVG from '@/assets/icons/housekeeping–twice-a-week.svg';
import SecurityShieldSVG from '@/assets/icons/utilities-covered.svg';

import StarCircleSVG from '@/assets/icons/apartment-maintenance-care.svg';
import LocationHeartSVG from '@/assets/icons/convenient-locations.svg';
import GovernmentBuildingSVG from '@/assets/icons/entire-apartment-living.svg';
import DogSVG from '@/assets/icons/pet-friendly.svg';
import FavoriteStar5SVG from '@/assets/icons/value-maximiser.svg';

export type TItem = {
  icon: ReactElement;
  content: string;
  className?: string;
};
export const data: Array<TItem> = [
  {
    icon: <UserSingleMaleSVG />,
    content: 'Friendly Customer Service',
  },
  {
    icon: <LocationHeartSVG />,
    content: 'Convenient Locations',
  },
  {
    icon: <DogSVG />,
    content: 'Pet Friendly',
  },
  {
    icon: <SecurityShieldSVG />,
    content: 'Utilities Covered (no limit)',
  },

  {
    icon: <GovernmentBuildingSVG />,
    content: 'Entire Apartment Living (no room sharing)',
  },
  {
    icon: <FavoriteStar5SVG />,
    content: 'Value Maximisers (Kitchenette, Washer, Dryer)',
  },
  {
    icon: <CalendarCheckSVG />,
    content: 'Housekeeping - twice a week',
  },
  {
    icon: <StarCircleSVG />,
    content: 'Apartment Maintenance Care',
  },
];
