import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    // It should authenticate the user, but this is a demo, so just let it get through.
    this.router.navigate(["welcome"]);
  }

}
