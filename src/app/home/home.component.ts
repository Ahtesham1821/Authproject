import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeForm!:FormGroup;

  ngOnInit(){
    let home1 = new FormBuilder();
    this.homeForm = home1.group({
      Username:[''],
      Password:['']
    })
  }
  @Output() Emithome= new EventEmitter<any>();
   Login(val:any)
   {
    console.log(val);
    this.Emithome.emit(val)

  }

}
