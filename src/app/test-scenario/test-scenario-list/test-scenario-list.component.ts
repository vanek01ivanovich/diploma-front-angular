import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {TestScenarioDto} from './test-scenario-dto';
import {TestScenarioService} from '../../services/test-scenario.service';
import {PaginationComponent} from '../../util/pagination/pagination.component';

@Component({
  selector: 'app-test-scenario-list',
  templateUrl: './test-scenario-list.component.html',
  styleUrls: ['./test-scenario-list.component.css']
})
export class TestScenarioListComponent implements OnInit {

  testScenarios: TestScenarioDto[] = [];
  search = {
    name: '', id: '', sortField: '', pageSize: '3', page: '1'};
  numberOfPages = 1;
  pageSize = 3;
  page1 = 1;
  @ViewChild(PaginationComponent)
  pagination: PaginationComponent;

  constructor(private testScenarioService: TestScenarioService) {
  }
  ngOnInit(): void {
    this.testScenarioService.countPages().subscribe(data => {
      this.numberOfPages = data;
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
    this.testScenarioService.getPage(this.getParams()).subscribe(data => {
      this.testScenarios = data;
    }, error => {
      console.log(error);
    });
  }

  onSelect(testScenario: TestScenarioDto) {
    console.log(testScenario);
    // TODO route to edit page
  }

  onSearchSubmit() {
    this.page1 = 1;
    this.testScenarioService.getPage(this.getParams()).subscribe(data => {
      this.testScenarios = data.map(testScenario => {
        console.log(testScenario);
        return testScenario;
      });
    }, error => {
      console.log(error);
    });
  }


}
