import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { person } from './interfaces'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
  }

  getData(){
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<person[]>(url);
  }
}
