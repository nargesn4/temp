import { Component, OnInit } from '@angular/core';
import  { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  // animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit  {
  name: any;
  state: string = '';

  constructor(public afAuth: AngularFireAuth,private router: Router) {

    this.afAuth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }
  logout() {
    this.afAuth.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }
}
