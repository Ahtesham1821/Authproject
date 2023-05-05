import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  
   childForm!:FormGroup;

   ngOnInit(){
    let build1 = new FormBuilder();
    this.childForm = build1.group({
      username:[""],
      email:[""],
      password:[""],
      lastname:[""]
    })
   }
   @Output() Emitvalue = new EventEmitter<any>();
   AddnewItem(val:any){
    console.log(val);
    this.Emitvalue.emit(val)
   }
  }

