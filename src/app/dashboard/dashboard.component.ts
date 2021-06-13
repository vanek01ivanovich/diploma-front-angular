import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { User } from '../model/user';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  user: User;
  myData: any;
  dataList: any = [];
  url: string;

  constructor(private service: NotificationService,
  private route: ActivatedRoute,
  private globalService: GlobalServiceService) { }


  getAuth(){
  this.service.getAuthorization().then(user => {
  this.user = user;
  });
  }

  connect(url: string): void {
         let eventUrl = url;
         this.service.getAuthorization().then(user => {
         this.url = user.id.toString();
         eventUrl = `http://localhost:8080/subscribe/${this.url}` ;
                   const eventSource = this.service.getEventSource(eventUrl);
                      eventSource.addEventListener(`message`, message => {
                                   this.myData = JSON.parse(message.data);
                                  this.dataList.push(this.myData);
                                  console.log(this.dataList);
                                  this.globalService.theItem = this.myData;
                                  console.log(this.globalService.theItem);
                                  //sessionStorage.setItem('notifications', this.myData);
                                   // localStorage.setItem("dataList", JSON.stringify(this.dataList));
                                   //this.storedNames = JSON.parse(localStorage.getItem("dataList")|| '{}')
                               });
         } );

  }

  ngOnInit(): void {

  }

}
