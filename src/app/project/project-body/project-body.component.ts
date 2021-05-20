import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, Input} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../model/project';

@Component({
  selector: 'app-project-body',
  templateUrl: './project-body.component.html',
  styleUrls: ['./project-body.component.css']
})
export class ProjectBodyComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  @Output() toSubmit = new EventEmitter();
  @Input() project: Project = {name: '', link: '', archived: ''};
  projectForm: any;

  showSaveProgress = false;
  progressMessage: string;
  progressTypeClass: string;
  progressFail = 'alert-danger';

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      name: new FormControl(this.project.name, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      link: new FormControl(this.project.link, [
        Validators.required,
        Validators.maxLength(50),
      ]),
    });
  }

  validateAndSubmit() {
    this.showSaveProgress = false;
    if (this.projectForm.invalid) {
      this.progressMessage = 'All fields should be filled with value of length less than 50 symbols.';
      this.progressTypeClass = this.progressFail;
      this.showSaveProgress = true;
      return;
    }
    this.toSubmit.emit(this.project);
  }

  ngOnInit(): void {
  }

}
