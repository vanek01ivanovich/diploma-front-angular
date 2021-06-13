import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {TestCaseExecutionsByDates} from '../../model/dashboard/test-case-executions-by-dates';
import { Chart } from 'angular-highcharts';
import {GroupedTestCaseExecutionDto} from '../../model/dashboard/groupedTestCaseExecutionDto.model';

@Component({
  selector: 'app-dashboard-test-case-executions-by-dates',
  templateUrl: './dashboard-test-case-executions-by-dates.component.html',
  styleUrls: ['./dashboard-test-case-executions-by-dates.component.css']
})
export class DashboardTestCaseExecutionsByDatesComponent implements OnInit {

  testCaseExecutionsByDates: TestCaseExecutionsByDates[];
  view: any[] = [600, 400];
  array = Array<{value: number, name: string}>();

  isEnableData = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'dates';
  showYAxisLabel = true;
  yAxisLabel = 'test case executions';
  timeline = true;
  showLabels = true;

  constructor(private service: DashboardService) {
  }

  ngOnInit(): void {
    this.getTestCaseExecutionsByDates();
  }


  getTestCaseExecutionsByDates() {
    this.service.getTestCaseExecutionsByDates(10).subscribe(data => {
      this.testCaseExecutionsByDates = data;
      data.forEach(x => {
        this.array.push({value: x.numberOfExecutions, name: x.date});
      });
      this.isEnableData = true;
    });
  }




}
