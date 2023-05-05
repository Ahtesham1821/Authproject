import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
 
    
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  
 });
 onSubmit() {
 
  console.warn(this.loginForm.value);
}

}
