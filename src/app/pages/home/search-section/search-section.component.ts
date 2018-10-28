import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html'
})
export class SearchSectionComponent implements OnInit {
  isAdvancedSearchHidden = true;

  constructor() { }

  ngOnInit() {
  }

  toggleAdvancedSearchSection() {
    this.isAdvancedSearchHidden = !this.isAdvancedSearchHidden;
  }

}
