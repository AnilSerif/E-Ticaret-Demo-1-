import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/Category';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductserviceService } from 'src/app/Service/productservice.service';
import { Productt } from '../productt';
import { AlertifyjsService } from 'src/app/Service/alertifyjs.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers:[CategoryService,ProductserviceService,AlertifyjsService]
})
export class ProductAddComponent implements OnInit {


  constructor(private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private productService:ProductserviceService,
    private alertifyservice:AlertifyjsService
    ) { }

  productAddForm:FormGroup;
  product:Productt = new Productt();
  categories:Category[];

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      img:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required]
    });
  }


  ngOnInit(){
    this.createProductAddForm();
    this.categoryService.getCategory().subscribe(data=>{
      this.categories = data
    });
  }



  add(){
    if(this.productAddForm.valid){
      this.product = Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.alertifyservice
    })
  }



}
