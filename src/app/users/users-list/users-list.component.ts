import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserDto} from './user-dto';
import {UserService} from '../../services/user.service';
import {HttpParams} from '@angular/common/http';
import {UserSearchDto} from './user-search-dto';
import {PaginationComponent} from '../../util/pagination/pagination.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();

  @ViewChild(PaginationComponent) pagination: PaginationComponent;

  users: UserDto[] = [];

  pageSize = 6;
  numberOfPages = 1;

  search = {
    name: '',
    surname: '',
    email: '',
    onlyEnabled: 'true',
    sortField: 'id',
    pageSize: this.pageSize.toString(10),
    page: '1',
    sortOrder: 'ASC'
  };
  roles = {admin: true, engineer: true, manager: true};

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
     this.countPages();
     this.onSearchSubmit();
  }

  countPages() {
    this.userService.getCountPagesSearch(this.getParams()).subscribe(data => {
      this.numberOfPages = data;
    });
  }

  getPageString() {
    return this.search.page.toString();
  }

  getParams() {
    let params = new HttpParams();
    Object.entries(this.search).forEach(([key, value]) => {
      if (value != null && value !== '') {
        params = params.append(key, value);
      }
    });
    return params.append('roles', Array.from(Object.entries(this.roles)
      .filter(([key, value]) => value)
      .map(([key, value]) => 'ROLE_' + key.toLocaleUpperCase())).join(','));
  }

  onColumnNameClick(column: string) {
    if (this.search.sortField !== column) {
      this.search.sortField = column;
      this.search.sortOrder = 'ASC';
    } else {
      this.search.sortOrder = (this.search.sortOrder === 'ASC' ? 'DESC' : 'ASC');
    }

    this.search.page = '1';
    this.pagination.eventClickPage(1);
  }

  getPage(page: number) {
    this.search.page = page.toString(10);
    this.userService.getPage(this.getParams()).subscribe(data => {
      this.users = data.map(user => {
        user.role = user.role.toLocaleLowerCase().replace('role_', '');
        user.enabled = user.enabled ? 'yes' : 'no';
        return user;
      });
    });
  }

  onSearchSubmit() {
    this.search.page = '1';
    this.countPages();
    this.pagination.eventClickPage(1);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
