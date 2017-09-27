import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private password: string;
  private email: string;
  private message: string;

  constructor(private data: SessionDataService) { }

  submitLogin() {
    this.data
        .login(this.email, this.password)
        .subscribe(
          user => this.message = 'HORRAY! Your name is ' + user.first_name,
          e => this.message = 'RUH ROH!' + e
        )
  }

  ngOnInit() {
  }

}
