import { Injectable } from '@angular/core';
import { StorageService } from './stroage.service';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private stroageService: StorageService) {}

  newuser(signupform: Users) {
    let signup = {
      id: this.stroageService.users.length + 1,
      email: signupform.email,
      password: signupform.password,
    };
    let users: Users[] = this.stroageService.getAllUsers();
    users.push(signup);
    localStorage.setItem('users', JSON.stringify(users));
   
  }
}
