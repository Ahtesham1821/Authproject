import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("http://localhost:57933/api/Values/gjkgbub")
  }

  postData(dat:any)
  {
    return this.http.post("http://localhost:57933/api/Values/postdata",dat)
  }
  
  putData(dat:any){
    return this.http.put("http://localhost:57933/api/Values/UpdateData",dat)
  }
}
