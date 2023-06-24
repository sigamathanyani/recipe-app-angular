import { Component,OnInit } from "@angular/core";
import { AuthService } from "src/app/Services/auth.service";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent {
    loggedIn:boolean;

    constructor(private auth:AuthService){}

    ngOnInit(){
        if(this.auth.isLoggedIn())  this.loggedIn = true;
        else this.loggedIn = false;
    }

    LogOut():void{
        localStorage.removeItem('token');
    }
}