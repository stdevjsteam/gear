import {Component, OnDestroy, OnInit} from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html'
})
export class SearchSectionComponent implements OnInit, OnDestroy {
  isAdvancedSearchHidden = true;
  minValue = 0;
  maxValue = 10;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  toggleAdvancedSearchSection() {
    this.isAdvancedSearchHidden = !this.isAdvancedSearchHidden;
  }

}
