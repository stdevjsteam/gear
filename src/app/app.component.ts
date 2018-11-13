import {Component, OnInit} from '@angular/core';
import {ModelsService} from '../shared/models.service';
import {AuthorizationService} from './services/authorization.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ModelsService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (private authService: AuthorizationService, private translator: TranslateService, public router: Router) {
    translator.setDefaultLang('arm');
    translator.use('arm');
  }
  ngOnInit() {
    // this.serv.getModles().subscribe( (res: ResponseModel<Model>) => {
    //   res.results.forEach(obj => console.log(obj.productionEnd));
    // });
  }
}
