import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http :HttpClient
  ) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path : string , params? : HttpParams ) : Observable<any>{
    return  this.http.get(`${environment.api_url}${path}`,{params})
  }
   post(path: string, body: Object = {}): Observable<any>{
    return this.http.post (
      `${environment.api_url}${path}`,
      JSON.stringify(body))
   }
   delete(path : string ): Observable<any>{
    return this.http.delete(
      `${environment.api_url}${path}`)
   }
}
