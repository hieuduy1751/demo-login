import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthState {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();


  constructor(private auth: AuthService) {
  }


  login(username: string, password: string) {
    this.isLoggedInSubject.next(this.auth.login(username, password));
  }

  logout() {
    this.isLoggedInSubject.next(false);
  }

}