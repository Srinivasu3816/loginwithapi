import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
//   loggeduserdata: any;
//   constructor(){
// const loggeddata=localStorage.getItem('userdara');
// if(loggeddata !== null){
// this.loggeduserdata=JSON.parse(loggeddata);
// }
//   }
  
  router=inject(Router);
  onlogoff(){
   
    localStorage.removeItem('userlogin');
    this.router.navigateByUrl('login');

  }
}
