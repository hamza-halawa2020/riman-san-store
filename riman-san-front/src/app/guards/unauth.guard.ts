
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class unauthGuard implements CanActivate {
  constructor(private auth : LoginService, private router: Router, private toast: NgToastService){

  }
  canActivate():boolean{
    if(!this.auth.isLoggedIn()){
      return true
    }else{
      // this.toast.error({detail:"ERROR", summary:"Please Login First!"});
      this.router.navigate(['/'])
      return false;
    }
  }

}
