import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestCaseTopSubscribed} from '../../model/dashboard/test-case-top-subscribed';
import {TestCaseService} from '../../services/test-case.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-top-subscribed-test-cases',
  templateUrl: './dashboard-top-subscribed-test-cases.component.html',
  styleUrls: ['./dashboard-top-subscribed-test-cases.component.css']
})
export class DashboardTopSubscribedTestCasesComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  testCases: TestCaseTopSubscribed[];

  constructor(private testCaseService: TestCaseService) {
  }

  ngOnInit(): void {
    this.getTestCases();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTestCases() {
    this.subscription.add(
      this.testCaseService.getTopFiveSubscribedTestCases()
        .subscribe(testCases => this.testCases = testCases,
          error => console.log(error))
    );
  }

}
