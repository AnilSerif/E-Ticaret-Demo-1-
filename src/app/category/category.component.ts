import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../Service/category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private http:HttpClient,
    private categoryService:CategoryService) {}

  title="Kategoriler";
  categories:Category[];


  ngOnInit(){
    this.categoryService.getCategory().subscribe(data=>{
      this.categories = data
    })
  }

}
