import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {

  constructor(private userData: ServicesService){
  

 

  }

  DataForm= new FormGroup({


    empId:new FormControl(''),
  
  
    empName: new FormControl(''),
  
  
    empDepartment:new FormControl(''),
  
  
   })
   SaveData(vari:any){
    console.warn(this.DataForm.value);
    this.userData.postData(vari).subscribe((res:any)=>
      {
      
        console.warn(res);
        
   })
  
    }

}
