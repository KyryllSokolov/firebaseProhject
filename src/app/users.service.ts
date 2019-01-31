import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILargeUser } from './interfaces/large-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers$(): Observable<ILargeUser[]> {
    return this.http.get<ILargeUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
