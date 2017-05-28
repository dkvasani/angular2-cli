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
  stockNamesData: string[] = [];
  errorMsg: string = '';
  brands: string[] = [];

  filteredBrands: any[];

  brand: string;

  constructor(private stockMarketService: StockmarketService, private router: Router) {
    stockMarketService.getDistinctNSE().subscribe(
      data => {
        if (data.success) {
          this.stockNamesData = data.results;
          console.log(this.stockNamesData[0]);
        } else {
          this.errorMsg = data.message ? data.message : "Please try again";
        }
      },
      error => {
        var response = error._body;
        var obj = JSON.parse(response);
      });
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

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.stockNamesData.length; i++) {
      let brand = this.stockNamesData[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

  handleDropdownClick() {
    this.filteredBrands = [];
    //mimic remote call
    setTimeout(() => {
      this.filteredBrands = this.brands;
    }, 100)
  }

}
