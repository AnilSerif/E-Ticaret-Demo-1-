import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Productt } from '../product/productt';
import { Observable,throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable()
export class ProductserviceService {
  
  path = "http://localhost:3000/Products"

  constructor(private http:HttpClient) { }

    getProduct(categoryId:string):Observable<Productt[]>{
      
      let newPath =this.path;
      if(categoryId){
        newPath = newPath + "?categoryId="+categoryId
      }

      return this.http.get<Productt[]>(newPath).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
    }



  handleError(error: HttpErrorResponse){
    let errorMessage=""
    if(error.error instanceof ErrorEvent){
      errorMessage = 'Bir hata oluştu' +error.error.message
    }else{
      errorMessage = "Sistemsel bir hata"
    }
    return throwError(errorMessage);
  }

  addProduct(product:Productt):Observable<Productt>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
    })
    }
    return this.http.post<Productt>(this.path,product,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
   
  }   










}
