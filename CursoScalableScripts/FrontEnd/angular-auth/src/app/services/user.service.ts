import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, ) { }

  resgister(data:Object): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/register',data)
  }

  login(data:Object): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/login',data, {withCredentials:true})
  }

  getUser(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/user',{withCredentials:true})
  }

  logOut(): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/logout',{},{withCredentials:true})
  }
}