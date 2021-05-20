import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../model/project';
import {ProjectService} from '../../services/project.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ProjectBodyComponent} from '../project-body/project-body.component';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();

  @ViewChild(ProjectBodyComponent)
  projectBody: ProjectBodyComponent;

  project: Project = {name: '', link: '', archived: 'false'};

  showSaveProgress = false;
  progressMessage: string;
  progressTypeClass: string;
  progressSuccess = 'alert-success';
  progressFail = 'alert-danger';

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService) {
  }


  ngOnInit(): void {
  }

  onSubmit(project: Project) {
    this.showSaveProgress = false;

    this.subscriptions.add(this.projectService.postProject(project).subscribe(data => {
        this.progressMessage = 'Successfully created.';
        this.progressTypeClass = this.progressSuccess;
        this.showSaveProgress = true;
      },
      error => {
        this.progressMessage = 'Error creating project.';
        this.progressTypeClass = this.progressFail;
        this.showSaveProgress = true;
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
