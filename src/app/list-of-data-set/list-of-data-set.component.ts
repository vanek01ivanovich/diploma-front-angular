import { Component, OnInit } from '@angular/core';
import { DataSet } from '../model/dataSet';
import { DataSetService } from '../services/data-set.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-list-of-data-set',
  templateUrl: './list-of-data-set.component.html',
  styleUrls: ['./list-of-data-set.component.css']
})
export class ListOfDataSetComponent implements OnInit {

  start: number;
  end: number;
  step: number = 10;

  searchedDataSet: any;
  pagination: any;
  numberOfPage: number;
  numberOfDataSets: number;

  allDataSet: DataSet[];



  constructor(private service: DataSetService) { }

  ngOnInit(): void {
    this.getAllDataSet().subscribe(dataSet => {
      this.allDataSet = dataSet;
      this.numberOfDataSets = this.allDataSet.length;
      this.numberOfPage = Math.ceil(this.numberOfDataSets / this.step);
      this.pagination = new Array(this.numberOfPage);
    });
    this.start = 0;
    this.end = this.step;
  }
  previousPage() {
    if(this.start != 0) {
      this.start = this.start - this.step;
      this.end = this.end - this.step;
    }
  }
  nextPage() {
    if(this.end <= this.allDataSet.length - 1) {
      this.start = this.start + this.step;
      this.end = this.end + this.step;
    }
  }

  onPage(page: number) {
    this.start = this.step * page;
    this.end = this.step + this.step * page;
  }

  getAllDataSet(): Observable<DataSet[]> {
    return this.service.getAllDataSet();
  }

}
