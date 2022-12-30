import { Component, OnInit } from '@angular/core';
import { AdminProdService } from '../admin-prod.service';
import { DealsService } from '../deals.service';

@Component({
  selector: 'app-admin-prod-dash',
  templateUrl: './admin-prod-dash.component.html',
  styleUrls: ['./admin-prod-dash.component.css']
})
export class AdminProdDashComponent implements OnInit {

  Deals:any;
  constructor(private service:DealsService) { }

  ngOnInit(): void {

    this.Deals=this.service.getDeals().subscribe((data)=>this.Deals=data);
  }
}
