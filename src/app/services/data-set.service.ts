import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataSet} from '../model/dataSet';
import {DataEntryCreate} from '../create-data-set/dataEntryCreate';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataSetService {
  [x: string]: any;

  private url = `${environment.url}`;
  private getAllDataSetUrl = this.url + 'all-data-set';
  private deleteDataSetUrl = this.url + 'delete-data-set/';


  constructor(private http: HttpClient) { }

  getAllDataSet(): Observable<DataSet[]> {
    return this.http.get<DataSet[]>(this.getAllDataSetUrl);
  }

  addDataSet(dataSetName: string, values: DataEntryCreate[]) {
    const url = `${this.url}create-data-set`;
    const body = { dataSetName: dataSetName, dataEntryValues: values };
    return this.http.post(url, body);
  }

  delete(id: number) {
    const url = `${this.deleteDataSetUrl}${id}`;
    return this.http.patch(url, {}).toPromise();
  }
}
