import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private signinService: SigninService) { }

  ngOnInit(): void {
  }
  data: any = {};

  login() {
    this.router.navigate(['/', 'login']);
  }
  // check(name:any,pwd:any,confirm:any)
  // {

  //     if(pwd!=confirm)
  //     {
  //       alert("please check whether your password and confirm password fields are same");
  //     }
  //     else
  //     {
  //       let xhr = new XMLHttpRequest();
  //       let requestBody = {
  //         "email": name,
  //         "password": pwd,
  //       };
  //       xhr.onreadystatechange = function() {
  //         if (this.readyState == 4 && this.status == 201) {
  //           alert("You are Registered successfully");

  //         }
  //       };
  //       xhr.open("POST", "http://localhost:3000/register", true);
  //       xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //       xhr.send(JSON.stringify(requestBody));
  //     }
  //   }
  register() {
    if (this.data.password != this.data.confpassword) {
      alert("Your password confirm password should match");
    }
    else {
      this.signinService.registerData(this.data).subscribe(() => {
        alert("Registered Successfully!!!");
        this.signinService.isLoggedIn = true;
        this.router.navigate(["/login"]);
      });
    }



  }
}
