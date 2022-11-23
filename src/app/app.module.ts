import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { ProductpipePipe } from './product/productpipe.pipe';
import { KurPipe } from './Pipes/kur.pipe';
import { AlertifyjsService } from './Service/alertifyjs.service';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './Service/account.service';
import { LoginGuard } from './login/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    CategoryComponent,
    ProductpipePipe,
    KurPipe,
    ProductAddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyjsService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
