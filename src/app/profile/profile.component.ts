import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Array<any> = [];
  errorMsg: string = '';
  file: any;
  constructor(private userService: UserService, private router: Router) {
    userService.profile().subscribe(
      data => {
        console.log(data);
        if (data.success) {
          console.log(data);
          this.user = data.data;
        } else {
          this.errorMsg = data.message ? data.message : "Please try again";
        }
      },
      error => {
        var response = error._body;
        var obj = JSON.parse(response);
      });
  }

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    this.userService.editProfile(form, this.file).subscribe(
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

  onChange(event) {
    this.file = event.srcElement;
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
    console.log(this.file);
  }

  ngOnInit() {
  }

}
