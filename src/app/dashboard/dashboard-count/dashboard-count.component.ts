import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {UserCountDto} from './user-count-dto';

@Component({
  selector: 'app-dashboard-count',
  templateUrl: './dashboard-count.component.html',
  styleUrls: ['./dashboard-count.component.css']
})

export class DashboardCountComponent implements OnInit {
  userCountDto: UserCountDto;
  constructor(private dashboardService: DashboardService) { }
  ngOnInit(): void {
    this.dashboardService.getUserCountByRole().subscribe(data => {
      this.userCountDto = data;
    } , error => {
      console.log(error);
    });
  }
  getUserCount() {
    return this.userCountDto.userCount;
  }
  getAdminCount() {
    return this.userCountDto.adminCount;
  }
  getManagerCount() {
    return this.userCountDto.managerCount;
  }
  getEngineerCount() {
    return this.userCountDto.engineerCount;
  }
}
