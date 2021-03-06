import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from "../login.service";
import { DataserviceService } from "../dataservice.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: String = '';

  constructor(private loginService: LoginService,private dataService: DataserviceService, private router: Router) {
    var currentUserToken = localStorage.getItem('currentUserToken');
    if (currentUserToken) {
      this.router.navigate(['dashboard']);
    }
  }
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    this.loginService.authenticate(form).subscribe(
      data => {
        if (data.success) {
          var logintToken = data.token;
          localStorage.setItem('currentUserToken', logintToken);
          localStorage.setItem('currentUserData', JSON.stringify(data.user));
          this.router.navigate(['dashboard']);
          this.dataService.currentUserToken = logintToken;
        } else {
          this.errorMsg = data.message ? data.message : "Please try again";
        }
      },
      error => {
        var response = error._body;
        var obj = JSON.parse(response);
        this.errorMsg = obj.message ? obj.message : "Please try again";
      });
  }

  ngOnInit() {
  }

}
