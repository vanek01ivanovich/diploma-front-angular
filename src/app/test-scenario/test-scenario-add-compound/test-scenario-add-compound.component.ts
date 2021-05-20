import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TestScenarioService} from '../../services/test-scenario.service';
import {TestScenarioItem} from '../../model/test-scenario/TestScenarioItem';
import {Compound} from '../../model/test-scenario/Compound';
import {Action} from '../../model/test-scenario/Action';
import {ActionWithPriority} from '../../model/test-scenario/ActionWithPriority';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-test-scenario-add-compound',
  templateUrl: './test-scenario-add-compound.component.html',
  styleUrls: ['./test-scenario-add-compound.component.css']
})
export class TestScenarioAddCompoundComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  @Output() eventCreated: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventCancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() actions: Action[];
  @Input() compounds: Compound[];
  compoundActions: ActionWithPriority[] = [];
  isElementSelected = false;
  currentCompoundName: string;
  currentCompound: Compound;

  constructor(private testScenarioService: TestScenarioService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAllCompoundsWithIdAndName() {
    this.subscription.add(
      this.testScenarioService.getAllCompounds()
        .subscribe(compounds => this.compounds = compounds,
          error => console.log(error)
        )
    );
  }

  cancelCompound() {
    this.eventCancel.emit();
  }

  createCompound() {
    const compound = new TestScenarioItem();
    compound.id = this.currentCompound.id;
    compound.type = 'Compound';
    compound.items = this.getActionInstances();
    this.eventCreated.emit({compound, compoundName: this.currentCompoundName});
  }

  setCompound() {
    this.currentCompound = this.getCompoundByName(this.currentCompoundName);
    this.subscription.add(
      this.testScenarioService.getAllCompoundActionsByCompoundId(this.currentCompound.id)
        .subscribe(actions => {
          this.compoundActions = actions;
        }, error => console.log(error))
    );
    this.isElementSelected = true;
  }

  private getActionInstances(): TestScenarioItem[] {
    const actions: TestScenarioItem[] = [];
    this.compoundActions.forEach(actionWithPriority => {
      const action = new TestScenarioItem();
      action.id = actionWithPriority.actionId;
      action.type = 'Action';
      action.priority = actionWithPriority.priority;
      actions.push(action);
    });
    return actions;
  }

  private getCompoundByName(name: string): Compound {
    return this.compounds.find(c => c.name === name) as Compound;
  }

  getActionNameById(id: number): string {
    return (this.actions.find(a => a.id === id) as Action).name;
  }
}
