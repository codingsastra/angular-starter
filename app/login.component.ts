import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
    selector:'login',
    templateUrl:'login.component.html',
    styleUrls:['login.component.scss']
})
export class LoginComponent{
    username:string;
    password:string;

    onLogin(loginForm:NgForm){
        console.log("Login called")
        console.log(loginForm.value.username)
        console.log(loginForm.value.password)
    }

}