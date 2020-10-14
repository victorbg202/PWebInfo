import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRegistrar: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  changeLogin(loginRegistrar: string): void {
    this.loginRegistrar = loginRegistrar;
  }

}
