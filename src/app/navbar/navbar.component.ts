import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private accountService:AccountService) { }
  ngOnInit(){
    
  }

  
  isLoggedin(){
    return this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
  }

}
