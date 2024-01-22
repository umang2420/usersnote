import { Component,OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { CurdServiceService } from 'src/services/curd-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  SignUpForm : FormGroup;
  constructor (private service:CurdServiceService) {
    this.SignUpForm=new FormGroup({
      Name :new FormControl('',Validators.required),
      UserName :new FormControl('',[Validators.required,Validators.minLength(10)]),
      userPassword:new FormControl('',[Validators.required,Validators.minLength(5)]),
    })
  }
  signUser(){
  this.service.setData(this.SignUpForm.value).subscribe(data=>{
    alert("data added");
    console.log(data);
  })
    }
  get userPassword(){
    return this.SignUpForm.get('userPassword');
  }
  get Name(){
    return this.SignUpForm.get('Name');
  }
  get UserName(){
  return this.SignUpForm.get('UserName');
  }
}