import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { NamSvcService } from './nam-svc.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardCls implements CanActivate
{
  constructor(
    private service:NamSvcService){}

  canActivate()
  {
    console.log("Step 2", this.service.isLogin)
    return this.service.isLogin
  }
}

