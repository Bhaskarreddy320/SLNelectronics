import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private db:AngularFireDatabase,private router:Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    
    this.db.list('/Admin/12345').valueChanges()
    .subscribe((result)=>{
        //console.log(result);
        if(email == result[1] && password == result[0]){
            sessionStorage.setItem('isAdminlogin',"true");
            this.router.navigate(['/admin']);
      
        }else{
          alert("please enter valid details");
        }
    });
  }

}
