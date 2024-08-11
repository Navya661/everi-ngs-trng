import { Component } from '@angular/core';
import {  ActivatedRoute  } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  NamVar:string=""
  MobVar:string=""
  OTPVar:any =0

  constructor(public LocVap:Location,
    public UrlVap: ActivatedRoute) {
      let state:any = LocVap.getState()
      this.OTPVar = state.OTPVak
     
  }
  ngOnInit()
  {
    let params=this.UrlVap.snapshot.params;
    this.NamVar=params.NamVak;
    this.MobVar=params.MobVak;
    


    // if(this.UrlVap.snapshot.params.Mobile=="Mobile"){
    // this.MobVar=this.UrlVap.snapshot.params.MobVak;
    // }
    // if(this.UrlVap.snapshot.params.Email=="Email"){
    //   this.EmaVar=this.UrlVap.snapshot.params.EmaVak;
    //   }

  }
}
