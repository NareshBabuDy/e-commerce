import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private registeruser: RegisterService,
    private router: Router) {}

  register(signupform: NgForm) {
    this.registeruser.newuser(signupform.value);
    
    this.router.navigate(['Login']);

  }
}
