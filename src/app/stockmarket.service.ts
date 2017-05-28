import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { DataserviceService } from "./dataservice.service";

@Injectable()
export class StockmarketService {

  constructor(private http: Http, private dataService: DataserviceService) {
    console.log("Post service initialized");
  }

  get(): Observable<any> {
    return this.http
      .get(this.dataService.stockserverAPI + 'users/listnse')
      .map(response => response.json()).catch(err => {
        return Observable.throw(err);
      });
  }

  getDistinctNSE(): Observable<any> {
    return this.http
      .get(this.dataService.stockserverAPI + 'nse/list')
      .map(response => response.json()).catch(err => {
        return Observable.throw(err);
      });
  }

}
