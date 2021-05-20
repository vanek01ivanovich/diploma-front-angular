import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Project} from '../../model/project';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();

  project: Project = {name: '', link: '', id: -1, archived: ''};
  projectInitialized = false;

  showSaveProgress = false;
  progressMessage: string;
  progressTypeClass: string;
  progressSuccess = 'alert-success';
  progressFail = 'alert-danger';

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private projectService: ProjectService) {
    this.subscriptions.add(
      this.route.paramMap.subscribe(value => {
        const projectId = value.get('project_id');
        if (projectId) {
          this.subscriptions.add(this.projectService.getProjectDtoById(parseInt(projectId, 10)).subscribe(data => {
            this.project.name = data.name;
            this.project.link = data.link;
            this.project.id = data.id;
            this.project.archived = data.archived.toString();
            this.projectInitialized = true;
          }));
        }
      }));
  }

  ngOnInit(): void {
  }

  onSubmit(project: Project) {
    this.subscriptions.add(this.projectService.updateProject(project).subscribe(data => {
        this.progressMessage = 'Successfully edited.';
        this.progressTypeClass = this.progressSuccess;
        this.showSaveProgress = true;
      },
      error => {
        this.progressMessage = 'Error editing project.';
        this.progressTypeClass = this.progressFail;
        this.showSaveProgress = true;
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
