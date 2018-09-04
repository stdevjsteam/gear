import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {camelizeKeys} from 'humps';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private httpClient: HttpClient) { }

  getModles() {
    return this.httpClient.get('http://gear-api.codebnb.me/api/v1/model/').pipe(map(res => camelizeKeys(res)));
  }
}
