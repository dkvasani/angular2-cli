import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
    var currentUserToken = localStorage.getItem('currentUserToken');
    if (currentUserToken) {
      this.router.navigate(['']);
    }

  }

  ngOnInit() {
  }

}
