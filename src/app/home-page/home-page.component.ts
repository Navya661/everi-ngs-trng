import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsPageComponent } from '../news-page/news-page.component';
import { FormsModule , NgForm,NgModel} from '@angular/forms';
import { NamSvcService } from '../nam-svc.service';
import { NamDtvDirective } from '../nam-dtv.directive';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NewsPageComponent,FormsModule,NamDtvDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  commentVar=""
  commentAryVar:any = {}
 
  selectedNews = ""
  constructor(
    public namService:NamSvcService, 
    public NavVap: Router,
    public UrlVap: ActivatedRoute) { }

  // LoginFnc()
  // {
  //   this.namService.isLogin = true
  //   this.namService.userName = "Navyashree"
  //   this.NavVap.navigate(["/about"])
  // }

  SelectMeFnc(EvtRsgVar:string)
  {
    this.selectedNews = EvtRsgVar
  }

 
  GotoPageFnc()
  {
    this.NavVap.navigate(["user/Navya/mobile/87654345"],
   {
    replaceUrl:true,
    state:{OTPVak:2345}
   });
  }
 
  AddFun(commentVav:NgModel)
  {
    if(this.commentAryVar[this.selectedNews])
      this.commentAryVar[this.selectedNews].push(this.commentVar)
    else
    this.commentAryVar[this.selectedNews] = [this.commentVar]
    commentVav.reset()
  }
}

 





