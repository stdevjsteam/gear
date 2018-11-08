import {AfterContentChecked, Component} from '@angular/core';
import {RouterDataService} from '../../../services/router-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [RouterDataService]
})
export class BlogComponent implements AfterContentChecked {
  data: { h1: string, h3: string, className: string, routerLink: string };

  constructor(private dataService: RouterDataService) {
  }

  ngAfterContentChecked() {
    this.data = this.dataService.getData;
  }

}
