import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  private roles: string[];
  // @ts-ignore
  public authority: string;

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return;
        }
        if (role === 'ROLE_ENGINEER') {
          this.authority = 'engineer';
          return;
        }
        if (role === 'ROLE_MANAGER') {
          this.authority = 'manager';
          return;
        }
      });
    }
  }
}
