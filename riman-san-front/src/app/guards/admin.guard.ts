import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth : LoginService, private router: Router, private toast: NgToastService){

  }
  canActivate():boolean{
    if(this.auth.isAdmin()){
      return true
    }else{
      this.toast.error({detail:"ERROR", summary:"403"});
      this.router.navigate(['/'])
      return false;
    }
  }

}
