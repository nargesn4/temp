import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import {query} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: AngularFireList<any>;
  msgVal: string = '';

  // constructor(db: AngularFirestore) {
  //   this.items = db.collection('items').valueChanges();
  // }


  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

    this.items = af.list('/messages');

    this.user = this.afAuth.authState;
  }
  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
  }
}

