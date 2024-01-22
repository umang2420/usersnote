import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurdServiceService {
  private url = "http://localhost:3000/users"
  constructor(private http:HttpClient) { }
  setData(user:any):Observable<any> {
    return this.http.post(this.url,user);
  }
  getData():Observable<any>{
    return this.http.get(this.url);
  }
}
  


