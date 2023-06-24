import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth:AuthService, private route:Router){}

  formSubmit(f:NgForm):void{
    this.auth.register(f.value).subscribe(data=>{
      this.route.navigateByUrl('/login');
    });
  }
}
