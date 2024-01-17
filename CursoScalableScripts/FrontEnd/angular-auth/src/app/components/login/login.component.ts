import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    password : new FormControl('',Validators.required),
  })
  
  constructor(private userService:UserService, private router:Router){}

  ngOnInit(): void {
      
  }
  
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  submit(){
    this.userService.login(this.loginForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate([''])
    })
  }
}
