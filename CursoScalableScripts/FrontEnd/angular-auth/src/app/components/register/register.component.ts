import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  
  registerForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    password : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
  })
  
  constructor(private userService:UserService, private router:Router){}

  ngOnInit(): void {
      
  }
  
  

  get name(){
    return this.registerForm.get('name')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }

  submit(){
    this.userService.resgister(this.registerForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['login'])
    })
  }
}
