import { Injectable } from '@angular/core';
import { StorageService } from './stroage.service';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private stroageSerices: StorageService) {}

  validateUser(loginform: Users): boolean {
    let users: Users[] = this.stroageSerices.getAllUsers();
    console.log(this.stroageSerices.getAllUsers());

    let isusers: boolean = false;
    for (let user of users) {
      if (
        user.email === loginform.email &&
        user.password === loginform.password
      ) {
        isusers = true;
        this.stroageSerices.setLoggedInUser(user);
      } else {
        isusers = false;
      }
    }
    return isusers;
  }

  isloggeding(): boolean {
    return this.stroageSerices.isLoggedInUser();
  }
}
