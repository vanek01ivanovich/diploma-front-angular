import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../services/auth-service.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login().subscribe();
  }

}
