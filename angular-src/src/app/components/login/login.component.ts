import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    //console.log("login");
    const user = {
      username : this.username,
      password : this.password

    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        console.log(data);
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show(data.msg, {csClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/dashboard'])

      }
      else{
        console.log(data);
        this.flashMessage.show(data.msg, {csClass: 'alert-danger', timeout: 3000})
      }

    })

  }

}
