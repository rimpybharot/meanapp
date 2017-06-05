import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    console.log(this.username);

    if(!this.validateService.validateRegister(user)){
      console.log("Fill Up");
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log("Invalid Email");
      return false;
    }
  }



}
