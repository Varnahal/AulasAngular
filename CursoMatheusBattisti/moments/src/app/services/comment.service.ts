import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Comment } from '../Comment';
import { Response } from '../Response';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private ApiUrl = `${environment.baseApiUrl}api/moments`


  constructor(private http:HttpClient) { }

  createComment(data:Comment):Observable<Response<Comment>>{
    const ApiUrl = `${this.ApiUrl}/${data.momentId}/comments` 
    return this.http.post<Response<Comment>>(ApiUrl,data)
  }


}
