import {Component, OnDestroy, OnInit} from '@angular/core';
import {LibraryCompoundService} from '../../services/library-compound.service';
import {Compound} from '../../model/compound.model';
import {Search} from '../../util/search/search.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-compounds',
  templateUrl: './list-compounds.component.html',
  styleUrls: ['./list-compounds.component.css']
})
export class ListCompoundsComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  compounds: Compound[];
  quantityPages: number;
  sorts = ['id', 'name'];
  currentPage = 1;
  currentPageSize = 5;
  currentSearch: string;
  currentSort: string;

  constructor(private service: LibraryCompoundService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getEventClickSearch(search: Search) {
    this.currentSearch = search.search;
    this.currentSort = search.sort;
    this.getQuantityPages();
    this.getCompounds();
  }

  getEventChangePage(page: number) {
    this.currentPage = page;
    this.getQuantityPages();
    this.getCompounds();
  }

  private getCompounds(): void {
    this.subscription.add(
      this.service.getCompounds(this.currentPage, this.currentPageSize, this.currentSearch, this.currentSort)
        .subscribe(compounds => this.compounds = compounds,
          error => console.log(error))
    );
  }

  private getQuantityPages() {
    this.subscription.add(
      this.service.getQuantityCompounds(this.currentSearch)
        .subscribe(quantity => this.quantityPages = Math.ceil(quantity / this.currentPageSize),
          error => console.log(error))
    );
  }

}
