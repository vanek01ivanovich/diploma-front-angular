import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from './auth-login-info';
import {Observable} from 'rxjs';
import {JwtResponse} from './jwt-response';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  private loginUrl = 'https://control-testing-hub-java.herokuapp.com/login';

  login(credentials: AuthLoginInfo): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
}
