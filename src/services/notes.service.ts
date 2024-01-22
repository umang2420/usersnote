import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private url="http://localhost:3000/userNote";
  constructor( private http:HttpClient) { }
  getService(userNote:any): Observable<any> {
    return this.http.post(this.url,userNote)
  }
  getDataService(id?:any):Observable<any>{
  if(id){
    return this.http.get(this.url + '/' + id);
}    
  else{
  return this.http.get(this.url);
}
  }
  deleteService(id:any):Observable<any>{
    return this.http.delete(this.url + '/'+id)
  }
  updateService(id:any, data:any):Observable<any>{
    return this.http.put(this.url + '/' + id ,data)
}

}
