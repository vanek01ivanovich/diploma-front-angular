import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TestScenarioItem} from '../../model/test-scenario/TestScenarioItem';
import {FormControl, Validators} from '@angular/forms';
import {TestScenarioService} from '../../services/test-scenario.service';
import {Compound} from '../../model/test-scenario/Compound';
import {Action} from '../../model/test-scenario/Action';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-scenario-create',
  templateUrl: './test-scenario-create.component.html',
  styleUrls: ['./test-scenario-create.component.css']
})
export class TestScenarioCreateComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  @ViewChild('inputElement') inputElemRef: ElementRef;
  formName = new FormControl('', [Validators.required]);
  compounds: Compound[];
  actions: Action[];
  items: TestScenarioItem[] = [];

  mapItemNames: Map<TestScenarioItem, string> = new Map<TestScenarioItem, string>();
  isCreated = false;
  isValidName = true;

  isAddCompound = false;
  isAddAction = false;

  constructor(private testScenarioService: TestScenarioService,
              private renderer: Renderer2,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setCompounds();
    this.setActions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addActionForm() {
    this.isAddAction = true;
    this.cancelCompoundForm();
  }

  addCompoundForm() {
    this.isAddCompound = true;
    this.cancelActionForm();
  }

  cancelActionForm() {
    this.isAddAction = false;
  }

  cancelCompoundForm() {
    this.isAddCompound = false;
  }

  addActionToTestScenario(params: { action: TestScenarioItem, actionName: string }) {
    this.addItemToTestScenario(params.action, params.actionName);
    this.cancelActionForm();
  }

  addCompoundToTestScenario(params: { compound: TestScenarioItem, compoundName: string }) {
    this.addItemToTestScenario(params.compound, params.compoundName);
    this.cancelCompoundForm();
  }

  private addItemToTestScenario(item: TestScenarioItem, itemName: string) {
    item.priority = (this.items as TestScenarioItem[]).length + 1;
    this.items.push(item);
    this.mapItemNames.set(item, itemName);
  }

  deleteItemFromTestScenario(item: TestScenarioItem) {
    this.mapItemNames.delete(item);
    const index = this.items.indexOf(item);
    this.items = this.items.filter(a => a !== item);
    for (let i: number = index; i < this.items.length; i++) {
      this.items[i].priority -= 1;
    }
  }

  private setCompounds(): void {
    this.subscription.add(
      this.testScenarioService.getAllCompounds()
        .subscribe(compounds => this.compounds = compounds,
          error => console.log(error))
    );
  }

  private setActions(): void {
    this.subscription.add(
      this.testScenarioService.getAllActions()
        .subscribe(actions => this.actions = actions,
          error => console.log(error))
    );
  }

  createTestScenario() {
    const name = this.formName.value;
    this.subscription.add(
      this.testScenarioService.createTestScenario({name, items: this.items})
        .subscribe(resp => this.checkValidTestScenarioName(resp.body),
          error => console.log(error))
    );
  }

  private checkValidTestScenarioName(isCreated: boolean | null) {
    if (isCreated) {
      this.finishCreateTestScenario();
    } else {
      this.setValidNameFalse();
    }
  }

  private finishCreateTestScenario() {
    this.cancelActionForm();
    this.cancelCompoundForm();
    this.formName.reset();
    this.items = [];
    this.isCreated = true;
    this.mapItemNames.clear();
    setTimeout(() => {
      this.isCreated = false;
      this.router.navigate(['/test-scenario']).then();
    }, 1500);
  }

  cancelTestScenario() {
    this.router.navigate(['/test-scenario']).then();
  }

  setValidNameTrue() {
    this.renderer.removeClass(this.inputElemRef.nativeElement, 'invalidInputForm');
    this.isValidName = true;
  }

  private setValidNameFalse() {
    this.renderer.addClass(this.inputElemRef.nativeElement, 'invalidInputForm');
    this.isValidName = false;
  }

  getCurrentPriority() {
    return this.items.length + 1;
  }

}
