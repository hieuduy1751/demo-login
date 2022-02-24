import { AuthState } from './loginDemo/states/auth/auth.state';
import { DashboardComponent } from './components/dashboard.component';
import { SignInComponent } from './components/signin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
