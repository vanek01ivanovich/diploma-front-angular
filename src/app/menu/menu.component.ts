import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private tokenService: TokenStorageService){}

  ngOnInit(): void {
  }
  logout() {
    this.tokenService.signOut();
    window.location.href = '/login';
  }
}
