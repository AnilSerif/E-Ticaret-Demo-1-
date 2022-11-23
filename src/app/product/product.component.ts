import { Component, OnInit } from '@angular/core';
import { Productt } from './productt';
import { AlertifyjsService } from '../Service/alertifyjs.service';
import { ProductserviceService } from '../Service/productservice.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductserviceService,AlertifyjsService]
})
export class ProductComponent implements OnInit {
  constructor(private alertify:AlertifyjsService,
    private http:HttpClient,
    private productService:ProductserviceService,
    private activatedRoute:ActivatedRoute
  
  ) {}
  Arama:""
  Title ="Ürün Listesi";
  Products:Productt[];
  

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProduct(params["categoryId"]).subscribe(data=>{
        this.Products = data
      });
    })

   
    
  }

  SepeteEkle(product:any){
    this.alertify.success(product.name + " Sepete Eklendi.");
    
  }
  SepetCikar(product:any){
    this.alertify.error( product.name + " Sepetten Çıkarıldı.");
  }
  
}
