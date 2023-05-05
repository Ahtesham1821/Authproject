import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 data:any=[];

 
 

 constructor(private userData: ServicesService){
  

 

 }


 ngOnInit(){
  this.getDataAll();
}
 
getDataAll(){
  this.userData.getData().subscribe(result =>{
    console.warn(result);
    this.data=result;

   
    })
}




}
