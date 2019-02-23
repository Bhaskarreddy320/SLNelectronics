import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild('gmap') gmapElement: any;
  @ViewChild('f') resetingForm;
  // map: google.maps.Map;
  title = 'sln';
  height:'300px';
  
//for carosule
ngOnInit() {
  
}

items = '../assets/resizedImagw.jpg';
mymap = "../assets/mymap.png"
carimg: Array<any> = [];
  constructor(private db:AngularFireDatabase) {
    
    this.carimg = [
      {title:"service at your door",image:'../../assets/fridge.jpg',desc:'Fridge Service and repair'},
      {title:"service at your door",image:'../../assets/geyser.jpg',desc:'Geyser Service and repair'},
      {title:"service at your door",image:'../../assets/induction.jpg',desc:'Induction Service and repair'},
      {title:"service at your door",image:'../../assets/mixi.jpg',desc:'Mixi Service and repair'},
      {title:"service at your door",image:'../../assets/tv.jpg',desc:'Tv Service and repair'},
      {title:"service at your door",image:'../../assets/washing.jpg',desc:'Washing machine Service and repair'},
      {title:"service at your door",image:'../../assets/water.jpg',desc:'R.O Service and repair'},
      {title:"service at your door",image:'../../assets/speaker.jpg',desc:'Speakers Service and repair'},
    ]
  }//constructor end
  onSubmit(myform){       
    myform.value.userData.date = new Date().getTime();
    let id =   this.db.createPushId();
    myform.value.userData.id = id;
    this.db.object("/customers/"+id).update(myform.value.userData);

    alert("we will get back to you soon");
    this.resetingForm.reset();
  }

}
