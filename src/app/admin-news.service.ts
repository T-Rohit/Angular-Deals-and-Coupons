import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { news } from './news';

@Injectable({
  providedIn: 'root'
})
export class AdminNewsService {

  constructor(private http:HttpClient) { }

  sendDetails(news: news){
    return this.http.post("http://localhost:8082/news/addNews",news);
  }
}
