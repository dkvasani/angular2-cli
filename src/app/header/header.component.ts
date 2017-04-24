import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUserToken : string = '';
  currentURL : string = '';
  currentUserData : any ;
  constructor(private router: Router) {
    this.currentUserToken = localStorage.getItem('currentUserToken');
    this.currentUserData = localStorage.getItem('currentUserData');
    this.currentURL = this.router.url;
    console.log("Headedr compo");
    this.currentUserData = JSON.parse(this.currentUserData);   
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUserToken');
    localStorage.removeItem('currentUserData');
    this.currentUserData = '';
  }

}
