import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

//  import { } from 'googlemaps';
//  import { } from '@types/googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAdmin:boolean;
  constructor(private router: Router){}
ngOnInit(){
  this.isAdmin = sessionStorage.getItem('isAdminlogin') == 'true'? true:false;
  //this.isAdmin =   admin.isAdminlogin;
  //console.log(admin.isAdminlogin);
}
  logout(){
    sessionStorage.clear();
    this.isAdmin = false;
    this.router.navigate(['/']);
  }
 
}
