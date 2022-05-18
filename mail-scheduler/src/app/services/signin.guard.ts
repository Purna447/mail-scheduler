import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';


@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate,CanActivateChild {


  constructor(private signinService: SigninService,private router: Router) { 

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("hello");
      return this.checkLogin(state.url);
      
  }

  checkLogin(url: string) {
    
    console.log(url);
    if (this. signinService.isLoggedIn) 
        return this. signinService.isLoggedIn;
    this. signinService.redirectUrl = url;
    return this.router.parseUrl("");
  }

  // checkIsUserAdmin(url: string) {
  //   if (this. signinService.isUserAdmin) {
  //     return this. signinService.isUserAdmin;
  //   }
  //   this. signinService.redirectUrl = url;
  //   return this.router.parseUrl("");
  // }
  
}
