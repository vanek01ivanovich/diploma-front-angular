import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActionExecutionDto} from '../model/action-execution-dto';
import {Observable} from 'rxjs';
import {FailedPassedActionExecution} from '../model/dashboard/failedPassedActionExecution';
import {environment} from '../../environments/environment';
import {Params} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActionExecutionService {

  private url = `${environment.url}`;
  private getAllActionExecutionsUrl = this.url + 'list/actions-execution/';
  private getFailedPassedActionExecutionUrl = this.url + 'dashboard/action-execution/';
  private getQuantityActionExecutionsUrl = this.url + 'list/actions-execution/quantity/';

  constructor(private http: HttpClient) { }

  getAllActionsExecution(testCaseExecutionId: number, paramsVal: Params){
    return this.http.get<ActionExecutionDto[]>(this.getAllActionExecutionsUrl + String(testCaseExecutionId), {
      params: paramsVal
    });
  }

  getFailedPassedActionsExecution(status: string): Observable<FailedPassedActionExecution[]> {
    const url = this.getFailedPassedActionExecutionUrl + status;
    return this.http.get<FailedPassedActionExecution[]>(url);
  }

  getQuantityActionsExecutions(currentSearch: string, testCaseExecutionId: number): Observable<number>  {
      const params = new HttpParams().append('search', currentSearch);
      return this.http.get<number>(this.getQuantityActionExecutionsUrl + String(testCaseExecutionId), {params});
  }
}
