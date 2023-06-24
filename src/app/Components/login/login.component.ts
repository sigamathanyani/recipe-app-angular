import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService, private route: Router){}

  formSubmit(f:NgForm):void{
    this.auth.login(f.value).subscribe((data:any)=>{
        localStorage.setItem('token',data.token);
        this.route.navigateByUrl('/');
    });
  }
}
