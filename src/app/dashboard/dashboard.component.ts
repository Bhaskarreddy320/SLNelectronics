import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerdetails;
  constructor(private db:AngularFireDatabase) {
     
   }

  ngOnInit() {
    this.db.list("/customers").valueChanges()
    .subscribe(res => {     
      console.log("valueChanges");   
      this.customerdetails = res;
      
    }) 
    

   
  }

  ondelete(customer){
    
    this.db.object("/customers/"+customer.id).remove();
  }

}
