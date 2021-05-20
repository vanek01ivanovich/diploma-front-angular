import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ActionExecutionDto} from '../model/action-execution-dto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = `${environment.url}`;
  private sendReportUrl = this.url + 'send/report/';

  constructor(private http: HttpClient) { }

  sendReport(testCaseExecutionId: number, actionExecution: ActionExecutionDto[]){
    return this.http.post<string>(this.sendReportUrl + String(testCaseExecutionId), actionExecution);
  }
}
