import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectDto} from '../projectDto';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();

  project: ProjectDto;
  isNotEngineer = this.tokenStorageService.getAuthorities().find(role => role === 'ROLE_ENGINEER') === undefined;

  constructor(private tokenStorageService: TokenStorageService, private route: ActivatedRoute, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.route.paramMap.subscribe(value => {
      const projectId = value.get('project_id');
      if (projectId) {
        this.projectService.getProjectDtoById(parseInt(projectId, 10)).subscribe(data => {
          this.project = data;
          console.log(this.project);
        });
      }
    }));
  }

  onArchiveButton() {
    if (this.project.archived) {
      this.subscriptions.add(this.projectService.unarchive(this.project.id).subscribe(data => {
        console.log('unarchived');
        this.project.archived = false;
      }));
    } else {
      this.subscriptions.add(this.projectService.archive(this.project.id).subscribe(data => {
        console.log('archived');
        this.project.archived = true;
      }));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
