import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): boolean {
    if (username && password) {
      return true;
    }
    return false;
  }
}