import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Emitters } from '../../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  messsage = 'não logado'
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
      this.userService.getUser().subscribe(
        (res)=>{
          this.messsage = `Você esta logado ${res.name}`
          Emitters.authEmitter.emit(true)
        },err =>{
          this.router.navigate(['login'])
          Emitters.authEmitter.emit(false)
        })
    
  }
}
