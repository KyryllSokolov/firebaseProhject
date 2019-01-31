import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  public books: AngularFireList<IUser[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.books = this.db.list('/users');
  }

}
