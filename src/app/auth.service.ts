import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from "@angular/core";
import { Observable, from as observableFrom} from "rxjs";
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard {
  // implements CanActivate {
  //
  // constructor(private auth: AngularFireAuth, private router: Router) {}
  //
  // canActivate(): Observable<boolean> {
  //   return observableFrom(this.auth)
  //     .take(1)
  //     .map(state => !!state)
  //     .do(authenticated => {
  //       if
  //       (!authenticated) this.router.navigate([ '/login' ]);
  //     })
  // }

}
