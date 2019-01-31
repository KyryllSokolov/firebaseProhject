import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IUser } from '../interfaces/user';
import {UsersService} from '../users.service';
import {ILargeUser} from '../interfaces/large-user';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  public serverUsers$: AngularFireList<IUser[]>;
  serverUsers: IUser[];
  users: IUser[];

  constructor(private db: AngularFireDatabase, private usersService: UsersService) { }

  ngOnInit() {
    this.serverUsers$ = this.db.list('/users');
    this.usersService.getUsers$().subscribe((users: ILargeUser[]) => {
      this.users = users.map((user: ILargeUser) => {
        return {
          username: user.username,
          email: user.email,
          id: user.id,
          name: user.name,
          website: user.website
        };
      });
      this.serverUsers$.push(this.users);
    });

    this.serverUsers$.valueChanges().subscribe((users: IUser[][]) => {
      console.log(users);
    });
  }

}
