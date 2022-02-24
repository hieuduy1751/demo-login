import { AuthState } from './../loginDemo/states/auth/auth.state';
import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  template: `
    Username: <input type="text" [formControl]="username">
    Password: <input type="password" [formControl]="password">
    <button (click)="onLogin()">Login</button>
  `
})
export class SignInComponent {
  username = new FormControl('');
  password = new FormControl('');


  constructor(private auth: AuthState) {
  }

  onLogin() {
    this.auth.login(this.username.value, this.password.value);
  }
}