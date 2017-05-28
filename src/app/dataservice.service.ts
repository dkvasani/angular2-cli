import { Injectable } from '@angular/core';

@Injectable()
export class DataserviceService {

  public scope: Array<any> | boolean = false;

  currentUserToken : string = '';
  currentURL : string = '';
  currentUserData : any ;
  serverAPI :string = 'http://localhost:1337/';
  stockserverAPI :string = 'http://localhost:3000/users/';
  constructor() {
    this.currentUserToken = localStorage.getItem('currentUserToken');
    this.currentUserData = localStorage.getItem('currentUserData');
   }

  public getScope(): any {
    return this.currentUserToken;
  }

  public setScope(scope: any): void {
    this.scope = scope;
  }

}
