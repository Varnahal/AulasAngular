import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../emitters/emitters';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  authenticated = false
  constructor(private userService:UserService){}
  ngOnInit(){
    Emitters.authEmitter.subscribe((auth:boolean)=>{this.authenticated = auth;})
  }

  logOut(){
    this.userService.logOut().subscribe((res)=>{
      console.log(res)
      this.authenticated = false
    })
  }
}
