import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpParams} from '@angular/common/http';


import {TestCaseDtoForPagination} from './test-case-dto-for-pagination';
import {TestCaseService} from '../../services/test-case.service';
import {PaginationComponent} from '../../util/pagination/pagination.component';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {TestCaseDtoWithUser} from './test-case-dto-with-user';

@Component({
  selector: 'app-test-case-list',
  templateUrl: './test-case-list.component.html',
  styleUrls: ['./test-case-list.component.css']
})
export class TestCaseListComponent implements OnInit {

  testCases: TestCaseDtoWithUser[] = [];
  search = {
    name: '', id: '', sortField: '', pageSize: '3', page: '1'};
  pageSearch = 1;
  numberOfPages = 1;
  pageSize = 3;
  projectId: number;
  @ViewChild(PaginationComponent)
  pagination: PaginationComponent;
  //
  // constructor(private route: ActivatedRoute,
  //             private formBuilder: FormBuilder, private projectService: ProjectService) {
  //   this.route.paramMap.subscribe(value => {
  //     const projectId = value.get('project_id');
  //     if (projectId !== null)  {
  //       this.projectId = parseInt(projectId, 10);
  //       this.projectService.getProjectDtoById(parseInt(projectId, 10)).subscribe(data => {
  //         this.projectForm = this.formBuilder.group({
  //           name: data.name,
  //           link: data.link,
  //           isArchived: data.archived
  //         });
  //       });
  //     }
  //   });
  // }


  constructor(private route: ActivatedRoute,
              private testCaseService: TestCaseService) {
    this.testCaseService = testCaseService;
    this.route.paramMap.subscribe(value => {
      const projectId = value.get('project_id');
      if (projectId !== null) {
        this.projectId = parseInt(projectId, 10);
      }
    });
  }
  ngOnInit(): void {
    this.testCaseService.countPages(this.projectId).subscribe(data => {
      this.numberOfPages = data;
      console.log(this.numberOfPages);
    }, error => {
      console.log(error);
    });
    this.onSearchSubmit();
  }

  getParams() {
    console.log(this.search);
    let params = new HttpParams();
    Object.entries(this.search).forEach(([key, value]) => {
      if (value != null && value !== '') {
        params = params.append(key, value);
      }
    });
    return params;
  }

  getPage(page: number) {
    this.search.page = page.toString(10);
    this.testCaseService.getPageByProjectIdWithUser(this.getParams(), this.projectId).subscribe(data => {
      this.testCases = data;
    }, error => {
      console.log(error);
    });
  }
  onSelect(testCase: TestCaseDtoForPagination) {
    console.log(testCase);
    // TODO route to edit page
  }

  onSearchSubmit() {
    this.pageSearch = 1;
    this.testCaseService.getPageByProjectIdWithUser(this.getParams(), this.projectId).subscribe(data => {
      this.testCases = data.map(testCase => {
        console.log(testCase);
        return testCase;
      });
    }, error => {
      console.log(error);
    });
  }
  run(id: number) {
    this.testCaseService.executeTestCase(id);
  }
}
