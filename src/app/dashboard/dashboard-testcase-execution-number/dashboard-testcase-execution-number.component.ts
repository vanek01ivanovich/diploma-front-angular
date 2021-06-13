import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {GroupedTestCaseExecutionDto} from '../../model/dashboard/groupedTestCaseExecutionDto.model';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-testcase-execution-number',
  templateUrl: './dashboard-testcase-execution-number.component.html',
  styleUrls: ['./dashboard-testcase-execution-number.component.css']
})
export class DashboardTestcaseExecutionNumberComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  constructor(private dashboardService: DashboardService) {}

  view: any[] = [500, 300];
  groupedTestCaseExecutions: GroupedTestCaseExecutionDto[];
  array = Array<{value: number, name: string}>();

  isEnableData = false;
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'test case';
  showYAxisLabel = true;
  yAxisLabel = 'times';
  timeline = true;
  showLabels = true;

  ngOnInit(): void {
    this.subscriptions.add(
    this.dashboardService.getGroupedTestCaseExecution().subscribe(ress => {
      this.groupedTestCaseExecutions = ress;
      this.groupedTestCaseExecutions.forEach( res => {
        this.array.push({ value: res.numberOfTestCaseExecution, name: res.testCaseName});
      });
      this.isEnableData = true;
    })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
