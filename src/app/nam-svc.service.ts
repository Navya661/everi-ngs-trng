import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamSvcService {

  isLogin=false
  userName=""
  constructor() { 
    let data = localStorage.getItem("login")
    if(data)
    {
      this.isLogin = !!data 
    }
    console.log("Step 1", this.isLogin)
  }


  onInit()
  {
  }
  loginFnc()
  {
    this.isLogin = true
    this.userName = "Navyashree"
    localStorage.setItem("login",this.isLogin+"")
  }
  logoutFnc()
  {
    this.isLogin = false
    this.userName = ""
    localStorage.setItem("login", "")
  }

}
