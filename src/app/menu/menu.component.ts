import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private tokenService: TokenStorageService){}
  userName: string;
  userNameArr: string[];
  role: string;
  roleAtt: string[];

  ngOnInit(): void {
    this.userName = this.tokenService.getUsername();
    this.userNameArr = this.userName.split('@', 2);
    this.userName = this.userNameArr[0];
    this.roleAtt = this.tokenService.getAuthorities();
    this.roleAtt = this.roleAtt[0].split('_', 2);
    this.role = this.roleAtt[1];
  }
  logout() {
    this.tokenService.signOut();
    window.location.href = '/login';
  }
}
