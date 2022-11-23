import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category/Category';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
 
  path = "http://localhost:3000/Categories" 
  constructor(private http:HttpClient) { }
 
    getCategory():Observable<Category[]>{
      return this.http.get<Category[]>(this.path);
    }


}
