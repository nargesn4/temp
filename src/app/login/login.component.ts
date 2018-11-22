import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [moveIn()],
  host: {'[@moveIn]': ''}
})

export class LoginComponent implements OnInit {
  error: any;
  constructor(public afAuth: AngularFireAuth,private router: Router) {

    this.afAuth.authState.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginFb() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }
  ngOnInit() {
  }

}
