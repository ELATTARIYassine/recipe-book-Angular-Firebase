import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: String = null; 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    this.isLoading = true;
    if(form.invalid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    
    if(this.isLoginMode){
      this.authService.login(email, password).subscribe(res => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      }, error => {
        this.error = "An error occurred!";
        this.isLoading = false;
      });
    }else{
      this.authService.signup(email, password).subscribe(res => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      }, error => {
        this.error = "An error occurred!";
        this.isLoading = false;
      });
    }

    form.reset();
  }
}
