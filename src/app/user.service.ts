import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { DataserviceService } from "./dataservice.service";

@Injectable()
export class UserService {

  constructor(private http: Http, private dataService: DataserviceService) {
    console.log("Post service initialized");
  }

  get(): Observable<any> {
    var token = this.dataService.currentUserToken;
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', token);
    let body = '';
    return this.http
      .post(this.dataService.serverAPI + 'user', body, { headers: headers })
      .map(response => response.json()).catch(err => {
        return Observable.throw(err);
      });
  }

  profile(): Observable<any> {
    var token = this.dataService.currentUserToken;
    console.log(token);
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', token);
    let body = '';
    return this.http
      .post(this.dataService.serverAPI + 'user/details', body, { headers: headers })
      .map(response => response.json()).catch(err => {
        return Observable.throw(err);
      });
  }

  editProfile(formObj, file): Observable<any> {
    var token = this.dataService.currentUserToken;
    var formData = new FormData();
    
    formData.append("avatar",  file);
    console.log(formData);
    var body = "name="+ formObj.name + "&password=" + formObj.password + "&email=" + formObj.email;
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', token);
    
    return this.http
      .post(this.dataService.serverAPI + 'user/profiles', formData, { headers: headers })
      .map(response => response.json()).catch(err => {
        return Observable.throw(err);
      });
  }
}
