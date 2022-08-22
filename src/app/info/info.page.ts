import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage {
  usrs: any;

  constructor(private router: Router,public userService: UsersService) {}
  back() {
    this.router.navigateByUrl('/home');
  }
  ionViewDidEnter() {
    this.userService.getUsers().then((data) => {
      this.usrs = data;
    });
  }
}
