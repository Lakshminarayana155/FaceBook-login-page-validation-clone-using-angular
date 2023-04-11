import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fbloginvalidation';

  loginuserform = new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.email]),
    userpass: new FormControl(null,[Validators.required,Validators.minLength(6)])
  })
  userlogin(){
    console.log(this.loginuserform.value)
  }
}
