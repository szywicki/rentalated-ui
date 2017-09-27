import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private password: string;
  private email: string;
  private message: string;

  constructor(private data: SessionDataService, private router: Router) { }

  submitLogin() {
    this.data
        .login(this.email, this.password)
        .subscribe(
        user => {
        if (user) {
          this.router.navigate(['mine']);
        } else {
          this.message = 'Could not log in with those credentials';
        }
      },
          e => this.message = 'RUH ROH!' + e
        );
  }

  ngOnInit() {
  }

}
