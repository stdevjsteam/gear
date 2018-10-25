import {Component, OnInit} from '@angular/core';
import {ModelsService} from '../shared/models.service';
import {Model} from '../shared/car-models/model.model';
import {ResponseModel} from '../shared/car-models/response-model.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ModelsService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private serv: ModelsService) {}
  ngOnInit() {
    // this.serv.getModles().subscribe( (res: ResponseModel<Model>) => {
    //   res.results.forEach(obj => console.log(obj.productionEnd));
    // });
  }
}
