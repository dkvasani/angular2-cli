import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
    console.log("Post service initialized");
  }

  authenticate(formObj):Observable<any> {
    //var body = formObj;
    var headers = new Headers();
    console.log(body);
    var body = "&password=" + formObj.password + "&email=" + formObj.email;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log("In the service");
    return this.http
      .post('http://localhost:1337/user/login', body, {headers : headers})
      .map(response => response.json()).catch(err => {

            return Observable.throw(err);
          });

  }

}
