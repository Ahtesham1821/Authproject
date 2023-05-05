import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AuthProject';
  ptext:any;
  text:any;
  ahtesham!: FormGroup;
  ngOnInit(){
    let ValidityFormBuilder = new FormBuilder();
    this.ahtesham = ValidityFormBuilder.group({
      text: new FormControl(""),
      ptext: new FormControl("")
    })
  }
  auth(val:any){
    console.log(val);
    this.text=val.text;
    this.ptext=val.ptext;
    localStorage.setItem('name',this.text);
    localStorage.setItem('password',this.ptext);
    window.location.assign('http://localhost:4200/profile');

  }
 recive:any=[];
  ReciveItem(val:any)
  {
   this.recive.push(val); 
  }

  collecting:any=[];
  Actas(val:any)
  {
      this.collecting.push(val);
  }
  
}
