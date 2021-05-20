import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Action} from '../../model/action.model';
import {LibraryActionService} from '../../services/library-action.service';
import {HttpParams} from '@angular/common/http';
import {Search} from '../../util/search/search.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  @Input()actions: Action[];
  @Input()pageNumbers: number;
  @Input()numberOfPages: number;
  @Input()pageSize: number;
  @Input()orderSearch: string;
  @Input()orderSort: string;
  p = 1;

  constructor(private actionService: LibraryActionService) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getListOfActions(page: number){
    const param = new HttpParams()
      .append('page', String(page))
      .append('orderSearch', String(this.orderSearch))
      .append('orderSort', String(this.orderSort))
      .append('pageSize', String(this.pageSize));
    this.subscription.add(
      this.actionService.getActions(param).subscribe(( res => {
        this.actions = res;
      }))
    );
  }

  getPage(page: number){
    this.getListOfActions(page);
    this.pageNumbers = page;
  }

  getPrevious(){
    if (this.pageNumbers !== 1){
      this.getListOfActions(this.pageNumbers - 1);
      this.pageNumbers -= 1;
    }
  }
  getNext(){
    if (this.pageNumbers !== this.numberOfPages){
      this.getListOfActions(this.pageNumbers + 1);
      this.pageNumbers += 1;
    }
  }


  onClickOrderColumn(column: string) {
    if (column !== this.orderSearch){
      this.orderSearch = column;
    }
    this.orderSort = this.orderSort === 'ASC' ? 'DESC' : 'ASC';
    this.getPage(1);
  }
}

