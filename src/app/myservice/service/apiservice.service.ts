import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  login(obj:any){
   return this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',obj);
  }
}
