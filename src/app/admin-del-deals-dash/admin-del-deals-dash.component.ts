import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';

@Component({
  selector: 'app-admin-del-deals-dash',
  templateUrl: './admin-del-deals-dash.component.html',
  styleUrls: ['./admin-del-deals-dash.component.css']
})
export class AdminDelDealsDashComponent implements OnInit {

  Deals:any;
  val:any;
  constructor(private service:DealsService, 
              private http:HttpClient) { }

  ngOnInit(): void {

    this.Deals=this.service.getDeals().subscribe((data)=>this.Deals=data);
  }

  delDeals(val:any){
    console.warn(val);
    this.http.delete('http://localhost:8085/product/deleteDeals/'+val).subscribe();
    alert("Deal Deleted");
    window.location.reload();
  }
}
