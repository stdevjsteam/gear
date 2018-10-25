import {Model} from './model.model';

export interface CarGeneration {
  id: string;
  name: string;
  model: Model;
  productionStart: Date;
  productionEnd: Date;
}
