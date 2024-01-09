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

  createMoment(formdata:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formdata)
  }


}
