import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private signinService: SigninService,private router : Router) { }

  ngOnInit(): void {
  }
  // login(userName:any,password:any)
  // {
  //   this.signinService.retreiveData(userName,password);
  //          this.router.navigate([this.signinService.redirectUrl]);
  // }
 
// retreiveData(userName:any,password:any)
// {
//     this.httpClient.get("http://localhost:3000/accounts").subscribe((data:any)=>{
//       for(let account of data)
//       {
//         if(userName==account.name && password==account.pwd)
//         {
//            alert("loggedin Successfully");
          
//         }
//       }
//     })
 
//     }

formData:any={};


login()
{
  this.signinService.sendData(this.formData).subscribe(()=>{
    alert("loggedIn!!!");
     this.signinService.isLoggedIn=true;     
     this.router.navigate(["/mailbar"]);
  },
  err=>
  {
    alert("invalid Credentials");
  }
  );
}
  }
  




