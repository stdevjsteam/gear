import {Component, Input} from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html'
})
export class RangeSliderComponent {
  @Input() minValue = 0;
  @Input() maxValue = 10;
  @Input() floor = 0;
  @Input() ceil = 100;
  @Input() step = 1;
  @Input() noSwitching = true;
  @Input() options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    hideLimitLabels: true,
    noSwitching: true,
    translate: (value: number, label: LabelType): string => {
      return '$' + value;
    }
  };
}
