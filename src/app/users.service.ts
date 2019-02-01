import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ILargeUser } from './interfaces/large-user';
import { IUser } from './interfaces/user';

@Injectable()
export class UsersService {
  private user: IUser;
  private userStream: Subject<IUser[]> = new Subject<IUser[]>();

  constructor(private http: HttpClient) { }

  getUsers$(): Observable<ILargeUser[]> {
    return this.http.get<ILargeUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  updateUsers(users: IUser[]): void {
    console.log('hey we did it', users);
    this.userStream.next(users);
  }

  getUsersStream(): Observable<IUser[]> {
    return this.userStream.asObservable();
  }
}
