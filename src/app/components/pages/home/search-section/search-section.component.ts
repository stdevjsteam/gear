import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html'
})
export class SearchSectionComponent implements OnInit, OnDestroy {
  isAdvancedSearchHidden = true;

  constructor() { }

  ngOnInit() {
    console.log('iniiiiiiiiiit');
  }

  ngOnDestroy() {
    console.log('destrooooy');
  }

  toggleAdvancedSearchSection() {
    this.isAdvancedSearchHidden = !this.isAdvancedSearchHidden;
  }

}
