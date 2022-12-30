import { Component, OnInit } from '@angular/core';
import { AdminProdService } from '../admin-prod.service';

@Component({
  selector: 'app-admin-prod',
  templateUrl: './admin-prod.component.html',
  styleUrls: ['./admin-prod.component.css']
})
export class AdminProdComponent implements OnInit {

  constructor(private service:AdminProdService) { }

  ngOnInit(): void {
  }

  getDeals(val: any){

    let resp=this.service.sendDetails(val);
    resp.subscribe(result=>{
      alert("Deal Added");
      
    });
  }

}
