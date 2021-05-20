import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Compound} from '../model/compound.model';
import {Action} from '../model/test-scenario/Action';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryCompoundService {

  constructor(private http: HttpClient) {
  }

  private url = `${environment.url}compounds`;

  getCompounds(page: number, pageSize: number, search: string, sort: string): Observable<Compound[]> {
    const param = new HttpParams()
      .append('pageSize', '' + pageSize)
      .append('page', '' + page)
      .append('search', search)
      .append('sortField', sort);
    return this.http.get<Compound[]>(this.url, {params: param});
  }

  getCompoundById(id: number): Observable<Compound> {
    return this.http.get<Compound>(`${this.url}/${id}`);
  }

  getQuantityCompounds(search: string): Observable<number> {
    const params = new HttpParams().append('search', search);
    return this.http.get<number>(`${this.url}/quantity`, {params});
  }

  getAllActionsOfCompoundByCompoundId(id: number): Observable<Action[]> {
    return this.http.get<Action[]>(`${this.url}/${id}/actions`);
  }

  archiveCompoundById(id: number): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, {});
  }

}
