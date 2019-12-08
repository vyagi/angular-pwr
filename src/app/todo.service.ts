import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://todoapimj.azurewebsites.net/api/todo';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get<any>(this.url);
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
