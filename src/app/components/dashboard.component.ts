import { AuthState } from './../loginDemo/states/auth/auth.state';
import { Component } from "@angular/core";

@Component({
  selector: 'app-dashboard',
  template: `
    <ng-container *ngIf="loggedIn; else signin">
      <h1>Dashboard</h1>
      <button (click)="this.logout()">Logout</button>
    </ng-container>
    
    <ng-template #signin>
      <app-signin></app-signin>
    </ng-template>
  `
})
export class DashboardComponent {
  loggedIn = false;
  constructor(private auth: AuthState) {
    this.auth.isLoggedIn$.subscribe(status => this.loggedIn = status);
  }
  ngOnInit(): void {

  }

  logout() {
    this.auth.logout();
  }
}