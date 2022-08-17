import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {IEmployee} from './IEmployee';
import { catchError } from 'rxjs';

@Injectable()
export class EmployeeService {
  public _url="/assets/data/employee.json";
  constructor(private http:HttpClient) { }
 

  getEmployees(){
    return [
      {"id":1, "name":"Sap", "age":22},
      {"id":2, "name":"ayy", "age":28},
      {"id":3, "name":"neo", "age":23},
      {"id":4, "name":"nay", "age":24}
    ];
  }
  getFromJson(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");    
  }
  
}
