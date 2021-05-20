import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TestCaseExecution} from "../model/testCaseExecution";
import {TestCaseExecutionWithFailedActionNumber} from "../model/testCaseExecutionWithFailedActionNumber";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TestCaseExecutionService {

  private url = `${environment.url}test-case-execution/`;
  private countTestCaseExecutionsUrl = this.url + 'count';

  private testCaseName: string;
  private projectName: string;


  constructor(private http: HttpClient) {
  }

  getAllTestCaseExecutionWithFailedActionNumber(limit: number, offset: number, orderBy: string, orderByClause: string, testCaseName: string,
                                                projectName: string, status: string): Observable<TestCaseExecutionWithFailedActionNumber[]> {
    this.toUndefined(testCaseName, projectName);
    const url = this.url + "all";
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString())
      .set('orderBy', orderBy)
      .set('orderByClause', orderByClause)
      .set('testCaseName', this.testCaseName)
      .set('projectName', this.projectName)
      .set('status', status);
    return this.http.get<TestCaseExecutionWithFailedActionNumber[]>(url,{params});
  }

  countTestCaseExecutions(testCaseName: string, projectName: string, status: string) {
    this.toUndefined(testCaseName, projectName);
    return this.http.get<number>(`${this.countTestCaseExecutionsUrl}/${this.testCaseName}/${this.projectName}/${status}`);
  }

  toUndefined(testCaseName: string, projectName: string) {
    this.testCaseName = (testCaseName == '') ? 'undefined' : testCaseName;
    this.projectName = (projectName == '') ? 'undefined' : projectName;
  }
}
