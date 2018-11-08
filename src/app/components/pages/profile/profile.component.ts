import {AfterContentChecked, Component} from '@angular/core';
import {RouterDataService} from '../../../services/router-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [RouterDataService]
})
export class ProfileComponent implements AfterContentChecked {
  data: { h1: string, h3: string, className: string, routerLink: string };

  constructor(private dataService: RouterDataService) {
  }

  ngAfterContentChecked() {
    this.data = this.dataService.getData;
  }

}
