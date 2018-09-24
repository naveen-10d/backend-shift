import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {throwError}  from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable () 
export class Apiservice {

    constructor(private http:HttpClient){}

    private setHeaders(): HttpHeaders {
        const headersConfig = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        };
        return new HttpHeaders(headersConfig);
      }

      private throwError (httpresponse:any){
        // return new throwError(httpresponse);

      }

      get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${path}`,
          {
            headers: this.setHeaders(),
            params
          }
        )
        //   .pipe(catchError(this.throwError));
      }
    
    
    
}
