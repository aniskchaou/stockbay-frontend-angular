import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { AuthentificationService } from 'src/app/main/security/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends URLLoader  implements OnInit {

  username = 'admin'
  password = 'admin'
  invalidLogin = false
  errorMessage=''

  constructor(private router: Router,
    private loginservice: AuthentificationService) {
      super()
     }

  ngOnInit() {
    
  }

  doLogin(loginform:NgForm) {
    (this.loginservice.authenticate(loginform.value.username, loginform.value.password).subscribe(
      data => {
        super.show('StockBay', 'Welcome !', 'success')
        super.loadScripts()
        this.router.navigate(['/dashboard']) 
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.errorMessage=error.message
        super.show('StockBay', this.errorMessage, 'error')
      }
    )
    );

  }

}
