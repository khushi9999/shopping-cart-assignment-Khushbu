import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allcetegory: any = [];

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(url);
  }

  postData(obj: any) {
    const headers = { 'content-type': 'application/json' }
    const body = obj;
    return this.http.post<any>('http://localhost:6005/users', body)
  }

}
