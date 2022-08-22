import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) {}
  getUsers() {
    return new Promise((resolve) => {
      this.http.get(this.url).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  addUsers(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data)).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
// getUsers(){
//  return fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json));
// }
