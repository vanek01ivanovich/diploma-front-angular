import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScenarioStep} from '../../model/test-case/scenario-step';
import {DataEntry} from '../../model/test-case/data-entry';
import {VariableValue} from '../../model/test-case/variable-value';

@Component({
  selector: 'app-test-case-body',
  templateUrl: './test-case-body.component.html',
  styleUrls: ['./test-case-body.component.css']
})
export class TestCaseBodyComponent implements OnInit {

  scenarioSteps: ScenarioStep[] = [];
  dataEntries: DataEntry[] = [];
  varVals: VariableValue[][][] = [];
  showForm = false;
  onlyView = false;

  @Output() showFormButton = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  initVarVals() {
    this.scenarioSteps.forEach((step, i) => {
      this.varVals[i] = [];
      step.actionDto.forEach((action, j) => {
        this.varVals[i][j] = [];
        action.variables.forEach((actionVariable, k) => {
          this.varVals[i][j][k] = {
            actionInstanceId: action.actionInstanceId,
            variableId: actionVariable.id,
            dataEntryId: (actionVariable.dataEntry === undefined || actionVariable.dataEntry === null) ?
              undefined : actionVariable.dataEntry.id,
            id: (actionVariable.variableValueId === undefined || actionVariable.variableValueId === null) ?
              undefined : actionVariable.variableValueId
          };
        });
      });
    });
    this.showFormButton.emit(true);
  }

  flattenVarVals() {
    const variableValues: VariableValue[] = [];
    this.scenarioSteps.forEach((step, i) => {
      step.actionDto.forEach((action, j) => {
        action.variables.forEach((actionVariable, k) => {
          variableValues.push(this.varVals[i][j][k]);
        });
      });
    });
    return variableValues;
  }

  areVariableValuesAllFilled(variableValues: VariableValue[]) {
    return variableValues.map(vv => vv.dataEntryId).filter(deId => deId === undefined).length > 0;
  }

}
