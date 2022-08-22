import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // name = [{}];
  usrs: any;

  constructor(public userService: UsersService, private router: Router) {}

  ionViewDidEnter() {
    this.userService.getUsers().then((data) => {
      this.usrs = data;
    });
  }
  //   this.userService.getUsers()
  //   .then(
  //     (data) => {this.usrs = data;}
  //   );
}
