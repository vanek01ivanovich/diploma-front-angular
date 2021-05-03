import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private tokenService: TokenStorageService){}

  ngOnInit(): void {
    console.log(this.tokenService.getAuthorities());
  }

  logout() {
    this.tokenService.signOut();
    window.location.href = '/login';
  }

}
