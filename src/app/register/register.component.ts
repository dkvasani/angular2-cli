import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from "../login.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  errorMsg : String = '';
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    this.loginService.register(form).subscribe(
      data => {
        if (data.success) {
          var logintToken = data.token;
          localStorage.setItem('currentUserToken', logintToken);
          localStorage.setItem('currentUserData', JSON.stringify(data.user));
            this.router.navigate(['dashboard']);
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
