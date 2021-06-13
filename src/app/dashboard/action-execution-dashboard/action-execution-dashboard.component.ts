import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";
import {ActionExecutionService} from "../../services/action-execution.service";


@Component({
  selector: 'app-action-execution-dashboard',
  templateUrl: './action-execution-dashboard.component.html',
  styleUrls: ['./action-execution-dashboard.component.css'],

})
export class ActionExecutionDashboardComponent implements OnInit {

  failedActionsData: any;
  passedActionsData: any;
  chart: Chart;

  constructor(private service: ActionExecutionService, private cd: ChangeDetectorRef) {
    //ChangeDetectorRef
   setTimeout(()=> {
     this.refreshChartData();
    }, 2000);
  }

  ngOnInit(): void {
   this.getFailedPassedActionsExecution();
   this.refreshChartData();
  }

  getFailedPassedActionsExecution() {
    this.service.getFailedPassedActionsExecution('FAILED').subscribe(data =>
      this.failedActionsData = data.map(function (point) {
        return [Date.UTC(Number(point.date.substr(0,4)),Number(point.date.substr(5,2))-1,
          Number(point.date.substr(8,2))), point.quantity];
      }));
    this.service.getFailedPassedActionsExecution('PASSED').subscribe(data =>
      this.passedActionsData = data.map((point) => {
          return [Date.UTC(Number(point.date.substr(0, 4)), Number(point.date.substr(5, 2)) - 1,
            Number(point.date.substr(8, 2))), point.quantity];
      }));
  }

  refreshChartData() {
   this.chart = new Chart({
      title: {
        text: 'Passed & Failed Actions'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'quantity'
        }
      },
      series: [
        {
          name: 'PASSED',
          color: 'green',
          type: 'column',
          data: this.passedActionsData
        },
        {
          name: 'FAILED',
          color: 'red',
          type: 'column',
          data: this.failedActionsData
        }
      ]
    });
   }
}
