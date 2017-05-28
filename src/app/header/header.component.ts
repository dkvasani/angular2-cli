import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUserToken : string = '';
  currentURL : string = '';
  currentUserData : any ;
  constructor(private router: Router, private dataService: DataserviceService) {
    this.currentUserToken = localStorage.getItem('currentUserToken');
    this.currentUserData = localStorage.getItem('currentUserData');
    this.currentURL = this.router.url;
    this.currentUserData = JSON.parse(this.currentUserData);
    dataService.setScope(this.currentUserToken);   
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUserToken');
    localStorage.removeItem('currentUserData');
    this.currentUserData = '';
  }

}
