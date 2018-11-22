import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import {config} from "rxjs";
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent} from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const firebaseConfig = {
  apiKey: "AIzaSyDqQ7mto6_M42Y6HSP1WE42FSqmf3YSzxA",
  authDomain: "loggin-project.firebaseapp.com",
  databaseURL: "https://loggin-project.firebaseio.com",
  projectId: "loggin-project",
  storageBucket: "loggin-project.appspot.com",
  messagingSenderId: "722792081117"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
