import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<any> = [];
  errorMsg: string = '';
  constructor(private userService: UserService, private router: Router) {
    userService.get().subscribe(
      data => {
        if (data.success) {
          console.log(data);
          this.users = data.data;
        } else {
          this.errorMsg = data.message ? data.message : "Please try again";
        }
      },
      error => {
        var response = error._body;
        var obj = JSON.parse(response);
      });
  }

  ngOnInit() {
  }

}
