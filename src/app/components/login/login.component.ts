import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurdServiceService } from 'src/services/curd-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private service: CurdServiceService,private route:Router) {}
  user: any = [];
  LoginForm = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  LoginUser() {
  }
  getData() {
    this.service.getData().subscribe(data => {
      this.user = data;
      this.user.forEach((element: any) => {
        if (element.UserName === this.LoginForm.value.UserName && element.userPassword === this.LoginForm.value.userPassword) {
          alert("user found");
          sessionStorage.setItem("loginData",JSON.stringify(element));
          this.route.navigateByUrl('/dashboard');
        }
      });
    });
  }
}
