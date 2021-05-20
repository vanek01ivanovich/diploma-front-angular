import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataSet} from '../model/dataSet';
import {DataEntry} from '../model/dataEntry';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditDataSetService {

  private url = `${environment.url}`;
  private getDataSetForEditUrl = this.url + 'dataset/edit/';
  private getDataEntryForEditUrl = this.url + 'dataentry/edit/';
  private updateDataEntryUrl = this.url + 'dataset/edit/update/';
  private deleteDataEntryUrl = this.url + 'dataset/edit/delete/';


  constructor(private http: HttpClient) {
  }

  deleteFromDataEntryById(dataEntryId: number) {
    return this.http.delete<string>(this.deleteDataEntryUrl + String(dataEntryId));
  }

  getDataSetByIdForEdit(id: number) {
    return this.http.get<DataSet>(this.getDataSetForEditUrl + String(id));
  }

  getDataEntryByDataSetIdForEdit(id: number) {
    return this.http.get<DataEntry[]>(this.getDataEntryForEditUrl + String(id));
  }

  updateDataEntry(dataEntry: DataEntry[], dataSet: DataSet) {
    return this.http.put<string>(this.updateDataEntryUrl + dataSet.id + '/' + dataSet.name , dataEntry);
  }

}
