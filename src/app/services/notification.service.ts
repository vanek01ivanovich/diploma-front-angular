import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserDto } from '../users/users-list/user-dto';
import {Params} from '@angular/router';
import {TestCaseExecution} from "../model/testCaseExecution";
import {Notification} from "../model/notification";
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private url = `${environment.url}`;
  private getAuthorizationUrl = this.url + 'notification';
  private getNotificationPageUrl = this.url + 'notification-page';
  private getAmountOfNotificationsUrl = this.url + 'amount-notification';
  user: User;

  constructor(private http: HttpClient, private zone: NgZone) { }

  getAuthorization(): Promise<User> {
  return this.http.get<User>(this.getAuthorizationUrl).toPromise();
  }

  getNotificationPage(): Observable<Notification[]> {
  return this.http.get<Notification[]>(this.getNotificationPageUrl);
  }

  getEventSource(url: string): EventSource {
      return new EventSource(url);
    }

  getAmountOfNotifications() {
    return this.http.get<number>(this.getAmountOfNotificationsUrl);
  }

}
