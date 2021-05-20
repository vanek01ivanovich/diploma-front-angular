import {AfterViewInit, Component, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ScenarioStep} from '../../model/test-case/scenario-step';
import {VariableValue} from '../../model/test-case/variable-value';
import {DataEntry} from '../../model/test-case/data-entry';
import {Scenario} from '../../model/test-case/scenario';
import {DataSet} from '../../model/test-case/data-set';
import {TestCaseService} from '../../services/test-case.service';
import {ActivatedRoute} from '@angular/router';
import {TestCaseBodyComponent} from '../test-case-body/test-case-body.component';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-test-case-create',
  templateUrl: './test-case-create.component.html',
  styleUrls: ['./test-case-create.component.css']
})
export class TestCaseCreateComponent implements OnInit, OnDestroy, AfterViewInit {

  subscriptions: Subscription = new Subscription();

  testCaseName = '';
  scenarioId = -1;
  datasetId = -1;
  scenarios: Scenario[] = [];
  datasets: DataSet[] = [];
  showForm = false;
  showSaveProgress = false;
  progressMessage = '';
  progressTypeClass = '';
  progressSuccess = 'alert-success';
  progressFail = 'alert-danger';

  @ViewChild(TestCaseBodyComponent)
  formBody: TestCaseBodyComponent;

  dataEntries: DataEntry[] = [];
  varVals: VariableValue[][][] = [];
  variableValues: VariableValue[] = [];

  constructor(private route: ActivatedRoute, private testCaseService: TestCaseService) {

  }

  ngAfterViewInit() {
    this.formBody.scenarioSteps = [];
    this.formBody.dataEntries = [];
    this.formBody.varVals = [];
  }

  ngOnInit(): void {
    this.subscriptions.add(this.testCaseService.getTestScenarioList().subscribe(data => {
      this.scenarios = data;
    }, error => {
      this.progressMessage = 'Error uploading test scenarios. Try reloading the page.';
      this.progressTypeClass = this.progressFail;
      this.showSaveProgress = true;
    }));

    this.subscriptions.add(this.testCaseService.getDataSetList().subscribe(data => {
      this.datasets = data;
    }, error => {
      this.progressMessage = 'Error uploading data sets. Try reloading the page.';
      this.progressTypeClass = this.progressFail;
      this.showSaveProgress = true;
    }));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onScenarioChosen() {
    this.subscriptions.add(this.testCaseService.getTestScenarioSteps(this.scenarioId).subscribe(data => {
      this.formBody.scenarioSteps = data;
      console.log(this.formBody.scenarioSteps);
    }, error => {
      this.progressMessage = 'Error uploading test scenario.';
      this.progressTypeClass = this.progressFail;
      this.showSaveProgress = true;
    }));
    if (this.formBody.dataEntries !== undefined && this.formBody.dataEntries.length !== 0) {
      this.formBody.showForm = true;
      this.formBody.initVarVals();
    }
  }

  onDatasetChosen() {
    this.subscriptions.add(this.testCaseService.getDataSetEntries(this.datasetId).subscribe(data => {
      this.formBody.dataEntries = data;
    }, error => {
      this.progressMessage = 'Error uploading data entries.';
      this.progressTypeClass = this.progressFail;
      this.showSaveProgress = true;
    }));
    if (this.formBody.scenarioSteps !== undefined && this.formBody.scenarioSteps.length !== 0) {
      this.formBody.showForm = true;
      this.formBody.initVarVals();
      console.log(this.showForm);
    }
  }

  validate() {
    this.showSaveProgress = false;
    if (this.testCaseName === '' || this.testCaseName === null || this.testCaseName === undefined) {
      this.progressMessage = 'Enter test case name!';
      this.progressTypeClass = this.progressFail;
      this.showSaveProgress = true;
      return false;
    }
    if (this.formBody.areVariableValuesAllFilled(this.variableValues)) {
      this.progressMessage = 'Fill in all values for variables!';
      this.progressTypeClass = this.progressFail;
      this.showSaveProgress = true;
      return false;
    }
    return true;
  }

  onSubmit() {
    this.showSaveProgress = false;

    this.variableValues = this.formBody.flattenVarVals();

    if (!this.validate()) {
      return;
    }

    this.subscriptions.add(this.route.paramMap.subscribe(value => {
      const projectId = value.get('project_id');
      if (projectId) {
        this.subscriptions.add(this.testCaseService.postTestCase(this.testCaseName, projectId, this.datasetId,
          this.scenarioId, this.variableValues)
          .subscribe(data => {
              this.progressMessage = 'Successfully created.';
              this.progressTypeClass = this.progressSuccess;
              this.showSaveProgress = true;
            },
            error => {
              this.progressMessage = 'Error saving test case.';
              this.progressTypeClass = this.progressFail;
              this.showSaveProgress = true;
            }
          ));
      }
    }));
  }
}
