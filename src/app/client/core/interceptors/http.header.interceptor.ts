import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })
   /**
     * inercept the request and add header 
         * add the token as a header 
    */
export class HeaderInterceptor implements HttpInterceptor{
    intercept(req : HttpRequest<any> , next : HttpHandler ) : Observable<HttpEvent<any>>{
      
        const  token = localStorage.getItem('token') ;
        const httpHeader = {
        
              'Content-Type':  'application/json' 
              
            }
           
 
        if (token) {
            httpHeader['Authorization'] =`Token ${token}` ;
       }
       //change the request add add the new header  
       const request  = req.clone( 
        {setHeaders : httpHeader }
        )
        return next.handle(request)
    }
}