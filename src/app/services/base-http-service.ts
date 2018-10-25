import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class BaseHttpService {

  protected constructor(private http: HttpClient) {
  }

  private static API_URL = environment.apiUrl;

  protected post<T>(url: string, body: T): Observable<any> {
    return this.http.post(BaseHttpService.API_URL + url, body).pipe(
      map(res => res)
    );
  }

  protected get<T>(url: string): Observable<HttpResponse<T>> {
    let API_URL = url;
    if (!url.includes('http')) {
      API_URL = BaseHttpService.API_URL + url;
    }
    return this.http.get(API_URL, {observe: 'response'}).pipe(
      map(res => res as HttpResponse<T>)
    );
  }

  protected delete<T>(url: string): Observable<HttpResponse<T>> {
    return this.http.delete<T>(BaseHttpService.API_URL + url, {observe: 'response'}).pipe(
      map(res => res as HttpResponse<T>)
    );
  }

  protected put<T>(url: string, body: any): Observable<HttpResponse<T>> {
    return this.http.put(BaseHttpService.API_URL + url, body, {observe: 'response'}).pipe(
      map(res => res as HttpResponse<T>)
    );
  }

  protected patch<T>(url: string, body: any): Observable<HttpResponse<T>> {
    return this.http.patch(BaseHttpService.API_URL + url, body, {observe: 'response'}).pipe(
      map(res => res as HttpResponse<T>)
    );
  }
}
