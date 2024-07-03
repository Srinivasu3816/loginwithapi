import { Component, inject } from '@angular/core';
import { ApiserviceService } from '../../myservice/service/apiservice.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  service=inject(ApiserviceService);
  router=inject(Router);
loginObj:any = {
  EmailId: "",
  Password: ""
};
onlogin(){
this.service.login(this.loginObj).subscribe((res:any)=>{
  if(res.result){
    localStorage.setItem('userlogin',JSON.stringify(res.data));
    this.router.navigateByUrl('userlist');

  }else{
    alert(res.message);
    this.router.navigateByUrl('login');
  }
})
}

}
