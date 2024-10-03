import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService, private router:Router){}
  author={
    email:'',
    password:''

  }
  token:any;

  login()
{ 
  this.auth.login(this.author)
  .subscribe(
    res=>{
      this.token=res;
      // mytoken : 'dfgsg'
      localStorage.setItem('token',this.token.mytoken)
      this.router.navigate(['/home'])
    },
    err=>{
      console.log(err)
    }
  )


}
}
