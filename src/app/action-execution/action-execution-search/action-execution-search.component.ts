import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-execution-search',
  templateUrl: './action-execution-search.component.html',
  styleUrls: ['./action-execution-search.component.css']
})
export class ActionExecutionSearchComponent implements OnInit {

  @Output() clickSearch: EventEmitter<any> = new EventEmitter<any>();
  currentSearch = '';

  constructor() {}

  ngOnInit(): void {
    this.setDefaultFields();
    this.eventClickSearch();
  }

  eventClickSearch() {
    this.clickSearch.emit(this.currentSearch);
  }

  private setDefaultFields() {
    this.currentSearch = '';
  }
}
