import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Deals:any;
  constructor(private service:DealsService) { }

  ngOnInit(): void {

    this.Deals=this.service.getDeals().subscribe((data)=>this.Deals=data);
  }

}
