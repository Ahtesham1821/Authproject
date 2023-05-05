import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

 
  DataForms= new FormGroup({


    empId:new FormControl(''),
  
  
    empName: new FormControl(''),
  
  
    empDepartment:new FormControl(''),
  
  
   })

   constructor(private userData: ServicesService){
    
   }
  SaveDatas(vari:any){
    console.warn(this.DataForms.value);
    this.userData.putData(vari).subscribe((res:any)=>
      {
      
        console.warn(res);
        
   })
  
    }
}
