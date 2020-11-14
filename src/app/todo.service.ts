import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://angularvolvotodoapi.azurewebsites.net/api/todo/';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get<any>(this.url)
    .pipe(catchError(error => {
      console.log(error);
      return throwError({
        message: 'No access to resource'
      });
    }));
  }
  update(item) {
    return this.httpClient.put<any>(this.url, item);
  }
  create(item) {
    return this.httpClient.post<any>(this.url, item)
  }
  delete(id) {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }

}
