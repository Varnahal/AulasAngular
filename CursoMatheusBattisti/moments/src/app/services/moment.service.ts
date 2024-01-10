import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { Response } from '../Response';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApi = environment.baseApiUrl
  private apiUrl = `${this.baseApi}api/moments`

  constructor(private http:HttpClient) { }

  getMoments():Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id:number):Observable<Response<Moment>>{
    const Url = `${this.apiUrl}/${id}`
    return this.http.get<Response<Moment>>(Url);
  }

  createMoment(formdata:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formdata)
  }

  removeMoment(id:number){
    const Url = `${this.apiUrl}/${id}`
    return this.http.delete(Url);
  }

  updateMoment(id:number, formData:FormData):Observable<FormData>{
    const Url = `${this.apiUrl}/${id}`
    return this.http.put<FormData>(Url,formData);
  }
}
