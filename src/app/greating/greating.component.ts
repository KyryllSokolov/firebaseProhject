import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser } from '../interfaces/user';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-greating',
  templateUrl: './greating.component.html',
  styleUrls: ['./greating.component.css']
})
export class GreatingComponent implements OnInit, OnDestroy {
  unssub: Subject<void> = new Subject<void>();
  a: Subscription[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsersStream()
      .pipe(
      takeUntil(this.unssub)
    )
      .subscribe((users: IUser[]) => {
        console.log(users);
      });
  }

  ngOnDestroy(): void {

    this.unssub.next();
    this.unssub.complete();
  }

}
