import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { StockmarketService } from "../stockmarket.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stockmarket',
  templateUrl: './stockmarket.component.html',
  styleUrls: ['./stockmarket.component.css']
})
export class StockmarketComponent implements OnInit {
stockData: Array<any> = [];
  errorMsg: string = '';
  constructor(private stockMarketService: StockmarketService, private router: Router) {
    stockMarketService.get().subscribe(
      data => {
        if (data.success) {
          console.log(data);
          this.stockData = data.results;
        } else {
          this.errorMsg = data.message ? data.message : "Please try again";
        }
      },
      error => {
        var response = error._body;
        var obj = JSON.parse(response);
      });
  }

  ngOnInit() {
  }

}
