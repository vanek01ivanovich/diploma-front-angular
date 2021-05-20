import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Params} from '@angular/router';
import {TestScenarioDto} from '../test-scenario/test-scenario-list/test-scenario-dto';
import {Compound} from '../model/test-scenario/Compound';
import {Action} from '../model/test-scenario/Action';
import {ActionWithPriority} from '../model/test-scenario/ActionWithPriority';
import {TestScenarioWithIdNameArchived} from '../model/test-scenario/TestScenarioWithIdNameArchived';
import {TestScenario} from '../model/test-scenario/TestScenario';
import {environment} from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class TestScenarioService {

  private url = `${environment.url}test-scenario/`;
  private getTestScenarioListUrl = this.url + 'list/page/';
  private countPagesUrl = this.url + 'pages/count/';

  constructor(private http: HttpClient) {
  }

  getTestScenarioById(id: number): Observable<TestScenarioWithIdNameArchived[]> {
    return this.http.get<TestScenarioWithIdNameArchived[]>(`${this.url}${id}`);
  }

  getAllCompounds(): Observable<Compound[]> {
    return this.http.get<Compound[]>(`${this.url}compounds`);
  }

  getAllActions(): Observable<Action[]> {
    return this.http.get<Action[]>(`${this.url}actions`);
  }

  getAllCompoundActionsByCompoundId(id: number): Observable<ActionWithPriority[]> {
    return this.http.get<ActionWithPriority[]>(`${this.url}compounds-actions/${id}`);
  }

  createTestScenario(testScenario: TestScenario): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(this.url, testScenario, {observe: 'response'});
  }

  updateTestScenarioById(testScenario: TestScenarioWithIdNameArchived): Observable<HttpResponse<boolean>> {
    return this.http.put<boolean>(`${this.url}${testScenario.id}`, testScenario, {observe: 'response'});
  }


  getPage(paramsVal: Params) {
    return this.http.get<TestScenarioDto[]>(this.getTestScenarioListUrl, {
      params: paramsVal
    });
  }

  countPages() {
    return this.http.get<number>(this.countPagesUrl);
  }

}
