import {Brand} from './brand.model';

export interface Model {
  id: string;
  name: string;
  brand: Brand;
  productionStart: Date;
  productionEnd: Date;
}
