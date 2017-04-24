import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) {
    console.log("Post service initialized");
  }

  get():Observable<any> {
    //var body = formObj;
    var headers = new Headers();
    console.log(body);
    
    var body = '';//"name="+ formObj.name + "&password=" + formObj.password + "&email=" + formObj.email;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append("Authorization","Basic YW5ndWxhci13YXJlaG91c2Utc2VydmljZXM6MTIzNDU2");
    console.log("In the service");
    return this.http
      .post('http://localhost:1337/user', body, {headers : headers})
      .map(response => response.json()).catch(err => {
            return Observable.throw(err);
          });
  }

}
