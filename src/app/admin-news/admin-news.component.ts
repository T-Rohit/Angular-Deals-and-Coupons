import { Component, OnInit } from '@angular/core';
import { AdminNewsService } from '../admin-news.service';
import { news } from '../news';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  constructor(private service:AdminNewsService) { }

  ngOnInit(): void {
  }

  getNews(val: any){

    let resp=this.service.sendDetails(val);
    resp.subscribe(result=>{
      console.warn(result)
    });
  }

}
  