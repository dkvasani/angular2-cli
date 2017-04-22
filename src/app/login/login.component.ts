import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private loginService: LoginService){

 }
   submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
    this.loginService.authenticate(form).subscribe();

  }

  ngOnInit() {
  }

}
