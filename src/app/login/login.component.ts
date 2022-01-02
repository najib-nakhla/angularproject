import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  err = 0;
  user = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin() {
    this.authService.login(this.user).subscribe((data)=> {
      let jwToken = data.headers.get('Authorization');
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
      },(err)=>{ this.err = 1;
      });
}}
