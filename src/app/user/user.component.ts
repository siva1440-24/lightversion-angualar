import { Component, computed, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Input } from '@angular/core';
import { input } from '@angular/core';
import {type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
  @Input({required: true}) selected!: boolean;

  // avatar = input<String>();
  // name = input<String>();
  // imagePath = computed(() => {
  //   return './assets/users/' + this.avatar();
  // });

  // selectedUser = DUMMY_USERS[randomIndex];
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  get imagePath() {
    return './assets/users/' + this.user.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.user.id);
    //Methods
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
