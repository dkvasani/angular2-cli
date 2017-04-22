import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUserToken = '';
  currentURL = '';
  constructor(private router: Router) {
    this.currentUserToken = localStorage.getItem('currentUserToken');
    this.currentURL = this.router.url;
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUserToken');
  }

}
