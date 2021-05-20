import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TestScenarioService} from '../../services/test-scenario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TestScenarioWithIdNameArchived} from '../../model/test-scenario/TestScenarioWithIdNameArchived';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-test-scenario-edit',
  templateUrl: './test-scenario-edit.component.html',
  styleUrls: ['./test-scenario-edit.component.css']
})
export class TestScenarioEditComponent implements OnInit, OnDestroy {

  @ViewChild('newName') inputElemRef: ElementRef;
  currentTestScenario: TestScenarioWithIdNameArchived = {id: 0, name: '', archived: false};
  isValidName = true;
  isCreated = false;
  form = new FormGroup({
    newName: new FormControl('', [Validators.required]),
    isArchived: new FormControl('False')
  });
  subscription: Subscription = new Subscription();

  constructor(private testScenarioService: TestScenarioService,
              private renderer: Renderer2,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTestScenarioById();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateTestScenario() {
    const name = (this.form.get('newName') as FormControl).value;
    const archived = (this.form.get('isArchived') as FormControl).value;
    this.subscription.add(
      this.testScenarioService.updateTestScenarioById({id: this.currentTestScenario.id, name, archived})
        .subscribe(response => {
          this.checkValidTestScenarioName(response.body);
        }, error => console.log(error))
    );
  }

  private getTestScenarioById() {
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        this.subscription.add(
          this.testScenarioService.getTestScenarioById(parseInt(params.get('id') as string, 0))
            .subscribe(scenarios => this.currentTestScenario = scenarios[0],
              error => console.log(error))
        );
      }, error => console.log(error))
    );
  }

  private checkValidTestScenarioName(isCreated: boolean | null) {
    if (isCreated) {
      this.finishUpdateTestScenario();
    } else {
      this.turnOffValidName();
    }
  }

  private finishUpdateTestScenario() {
    this.isCreated = true;
    setTimeout(() => {
      this.router.navigate(['/test-scenario']).then();
    }, 2000);
  }

  cancelTestScenario() {
    this.router.navigate(['/test-scenario']).then();
  }

  private turnOffValidName() {
    this.renderer.addClass(this.inputElemRef.nativeElement, 'invalidInputForm');
    this.isValidName = false;
  }

  changeValid() {
    this.isValidName = true;
    this.renderer.removeClass(this.inputElemRef.nativeElement, 'invalidInputForm');
  }
}
