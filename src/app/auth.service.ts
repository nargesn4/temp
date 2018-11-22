import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import {Observable,  from} from "rxjs";
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/observable/from';
console.log("not yet implemented");

 @Injectable()
 export class AuthGuard implements CanActivate {
 constructor(private auth: AngularFireAuth, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {{
    return new Promise((resolve, reject) => {
      this.auth.authState.subscribe(auth => {
        if(auth) //this.router.navigate([ '/members' ]);
          alert("loggedin? auth="+JSON.stringify(auth)) ;
        else alert('not logged in?')
      });
    });
  }
}
//
//   canActivate(): Observable<boolean> {
//     return from(this.auth)
//       .take(1)
//       .map(state => !!state)
//       .do(authenticated => {
//         if
//         (!authenticated) this.router.navigate([ '/login' ]);
//       })
//   }
//
}
