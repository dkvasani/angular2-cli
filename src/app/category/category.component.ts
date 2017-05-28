import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Array<any> = [];
  errorMsg: string = '';
  constructor(private commonService: CommonService, private router: Router) {
    commonService.get().subscribe(
      data => {
        if (data.success) {
          console.log(data);
          this.categories = data.data;
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
    this.commonService.create(form).subscribe(
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
