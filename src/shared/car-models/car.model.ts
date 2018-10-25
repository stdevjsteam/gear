import {CarGeneration} from './car-generation.model';
import {Color} from './color.model';
import {Price} from './Price';

export interface Car {
  id: string;
  images: Array<object>;
  generation: CarGeneration;
  advert: any;
  information: any;
  isCrashed: boolean;
  cubicCapacity: number;
  customClearance: boolean;
  productionDate: Date;
  guarantee: boolean;
  kilometer: number;
  transmission: string;
  driveType: string;
  driveWheelType: string;
  fuelType: string;
  carType: string;
  power: number;
  ownersCount: string;
  purchasedYear: Date;
  vin: string;
  regCertificate: string;
  used: boolean;
  color: Color;
  seenCount: number;
  dailySeenCount: number;
  currency: string;
  price: Array<Price>;
}
