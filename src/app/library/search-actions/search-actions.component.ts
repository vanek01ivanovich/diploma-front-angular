import {Component, Input, OnInit, Output, EventEmitter, ViewChild, OnDestroy} from '@angular/core';
import {ListActionsComponent} from '../list-actions/list-actions.component';
import {Action} from '../../model/action.model';
import {LibraryActionService} from '../../services/library-action.service';
import {HttpParams} from '@angular/common/http';
import {CreateCompoundActionsComponent} from '../../create-compound/create-compound-actions/create-compound-actions.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-actions',
  templateUrl: './search-actions.component.html',
  styleUrls: ['./search-actions.component.css']
})
export class SearchActionsComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  @Output()actions = new EventEmitter<Action[]>();
  @Output()numberOfPages = new EventEmitter<number>();
  @Input()orderSearch = 'id';
  @Input()orderSort: string;
  actionName: string;
  pageNumber: number;
  pageSize = 5;

  constructor(private listActionsComponent: ListActionsComponent, private actionService: LibraryActionService) { }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchAction(){
    if (this.actionName === '' && this.orderSearch === ''){
      this.ngOnInit();
    }else{
      this.pageNumber = 1;
      const param = this.getParams();
      this.subscription.add(
        this.actionService.getActionsByName(param, this.actionName).subscribe((response => {
          this.actions.emit(response);
          this.numberOfPages.emit(response.length);
        }))
      );
    }
  }

  getOrderSearch() {
    this.pageNumber = 1;
    this.actionService.getNumberOfActions().subscribe(( res => {
      this.numberOfPages.emit(Math.round(res / this.pageSize));
    }));
    const param = this.getParams();
    this.subscription.add(
      this.actionService.getActions(param).subscribe(( res => {
        this.actions.emit(res);
      }))
    );
  }

  getParams(){
    return new HttpParams()
      .append('page', String(this.pageNumber))
      .append('orderSearch', String(this.orderSearch))
      .append('orderSort', String(this.orderSort))
      .append('pageSize', String(this.pageSize));
  }
}
