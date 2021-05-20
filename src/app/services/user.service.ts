import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {UserDto} from '../users/users-list/user-dto';
import {Params} from '@angular/router';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${environment.url}`;
  private managerUrl = this.url + 'manager';
  private adminUrl = this.url + 'admin';
  private getUsersListUrl = `${this.url}users`;
  private countPagesUrl = `${this.url}users/pages/count`;
  private countSearchPagesUrl = `${this.url}users/pages/count-search`;

  constructor(private http: HttpClient) {
  }

  getManagerBoard(): Observable<string> {
    return this.http.get(this.managerUrl, {responseType: 'text'});
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.url}users/${id}`;
    return this.http.get<User>(url);
    // return this.http.get<User>(`${this.url}/users/${id}`);
  }

  updateUser(user: User) {
    const url = `${this.url}users/update`;
    const body = {id: user.id, email: user.email, name: user.name, surname: user.surname, role: user.role, enabled: user.enabled};
    return this.http.put(url, body);
  }

  getPage(params: Params) {
    return this.http.get<UserDto[]>(this.getUsersListUrl, {params});
  }

  getCountPagesSearch(params: Params) {
    return this.http.get<number>(this.countSearchPagesUrl, {params});
  }

  countPages() {
    return this.http.get<number>(this.countPagesUrl);
  }

  addUser(user: User) {
    const url = `${this.url}users/add`;
    const body = {email: user.email, password: user.password, name: user.name, surname: user.surname, role: user.role};
    return this.http.post(url, body).toPromise();
  }

  resetPassword(passwordToken: string, pass: string) {
    const url = `${this.url}settings/resetpass`;
    const body = {token: passwordToken, password: pass};
    return this.http.put(url, body).toPromise();
  }

  getUserSettings() {
    const url = `${this.url}settings`;
    return this.http.get<User>(url).toPromise();
  }

  updateUserSettings(user: User) {
    const url = `${this.url}settings`;
    const body = {name: user.name, surname: user.surname};
    return this.http.put(url, body).toPromise();
  }

  resetPasswordSettings(user: User) {
    const url = `${this.url}settings/password`;
    const body = {email: user.email, password: user.password};
    return this.http.put(url, body).toPromise();
  }

  resetPasswordByEmail(user: User) {
    const url = `${this.url}settings/reset-by-email`;
    const body = {email: user.email};
    return this.http.post(url, body).toPromise();
  }

  checkIfEmailExists(email: string) {
  const url = `${this.url}users/check-email/`;
  return this.http.get<boolean>(url + String(email));
  }

}
