import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Action} from '../model/action.model';
import {Observable} from 'rxjs';
import {Params} from '@angular/router';
import {environment} from 'src/environments/environment';
import {ActionVariableDto} from '../model/action-variable-dto.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryActionService {

  constructor(private http: HttpClient) { }

  private url = `${environment.url}`;
  private getActionsUrl = `${this.url}library/actions`;
  private getActionsByNameUrl = `${this.url}library/actions/`;
  private getNumberOfActionsUrl = this.getActionsByNameUrl + 'count';
  private getAllActionsUrl = this.getActionsByNameUrl + 'get/all';
  private getActionVariableUrl = this.url + 'action/view-edit/';
  private updateActionVariableUrl = this.url + 'action/view-edit/update/';

  getActions(paramsVal: Params): Observable<Action[]>{
    return this.http.get<Action[]>(this.getActionsUrl, {
      params: paramsVal
    });
  }

    getActionsByName(paramsVal: Params, actionName: string): Observable<Action[]>{
    return this.http.get<Action[]>(this.getActionsByNameUrl + actionName, {  params: paramsVal});
  }

  getActionById(actionId: number){
    return this.http.get<ActionVariableDto[]>(this.getActionVariableUrl + String(actionId));
  }

  getNumberOfActions(){
    return this.http.get<number>(this.getNumberOfActionsUrl);
  }

 createAction(name: string, description: string, variableValues: string[]) {
   const url = this.url + "create-action/" + name + "/" + description;
   this.http.post(url,variableValues).toPromise();
 }

  getAllActions() {
    return this.http.get<Action[]>(this.getAllActionsUrl);
  }

  updateActionDescription(action: Action) {
    return this.http.put<string>(this.updateActionVariableUrl + String(action.actionId), action);
  }
}
