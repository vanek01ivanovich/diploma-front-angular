import { Component, OnInit } from '@angular/core';
import { allTestCase } from './allTestCase';
import {Observable} from 'rxjs';
import {TestCaseService} from '../services/test-case.service';

@Component({
  selector: 'app-list-of-test-cases',
  templateUrl: './list-of-test-cases.component.html',
  styleUrls: ['./list-of-test-cases.component.css']
})
export class ListOfTestCasesComponent implements OnInit {

  start: number;
  end: number;
  step = 5;
  searchedTestCase: any;

  allTestCases: allTestCase[];

  /*allTestCasesTest = [
    {id: 1, name: "test"},
    {id: 2, name: "newtest"},
    {id: 3, name: "werwer"},
    {id: 4, name: "sdfsdf"},
    {id: 5, name: "324324"},
    {id: 6, name: "qweqwe"},
    {id: 1, name: "teset"},
    {id: 2, name: "qwqqst"},
    {id: 3, name: "aasser"},
    {id: 4, name: "zxxxdf"},
    {id: 5, name: "7824"},
    {id: 6, name: "yuyueqwe"},
    {id: 1, name: "filt"}
  ]*/

  constructor(private service: TestCaseService) { }

  ngOnInit(): void {
    this.getAllTestCases().subscribe(dataSet => this.allTestCases = dataSet);
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
    if(this.end <= this.allTestCases.length) {
      this.start = this.start + this.step;
      this.end = this.end + this.step;
    }
  }
  getAllTestCases(): Observable<allTestCase[]> {
    return this.service.getAllTestCases();
  }
  run(id: number) {
    this.service.executeTestCase(id);
  }
}
