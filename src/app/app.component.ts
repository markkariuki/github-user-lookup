import { Component }from'@angular/core';
import { Http, Response } from '@angular/http';

import { userData } from './interfece';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user look-up';

  userName='';
  avatar_url='';
  userData:any = []

  constructor(private http: Http){}

  searchUserName(){
    this.http.get('https://api.github.com/users/'+ this.userName).
    subscribe(
    (res:Response)=>{
      const userData1 = res.json();
      console.log(userData)
      this.userData = userData1;

    }
    )
  }



}
