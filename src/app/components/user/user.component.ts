import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  surfacing = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  getUserInfo(user: User): void {
    console.log(user);
    this.surfacing.emit(user);
  }
}
