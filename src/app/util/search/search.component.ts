import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Search {
  search: string;
  sort: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  currentSearch: string;
  currentSort: string;
  @Input() sorts: string[];
  @Output() clickSearch: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.setDefaultFields();
    this.eventClickSearch();
  }

  eventClickSearch() {
    this.clickSearch.emit({search: this.currentSearch, sort: this.currentSort});
  }

  private setDefaultFields() {
    this.currentSearch = '';
    this.currentSort = this.sorts[0];
  }

}
