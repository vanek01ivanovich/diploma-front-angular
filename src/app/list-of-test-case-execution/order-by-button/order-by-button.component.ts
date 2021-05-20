import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-order-by-button',
  templateUrl: './order-by-button.component.html',
  styleUrls: ['./order-by-button.component.css']
})
export class OrderByButtonComponent implements OnInit {
  @Input()
  element: string;
  @Output()
  elementName: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  orderByClause: EventEmitter<string> = new EventEmitter<string>();

  toggle: string = 'DESC';

  constructor() { }

  ngOnInit(): void {
  }

  orderBy(orderByClause: string) {
    this.toggle = orderByClause;
    this.elementName.emit(orderByClause + "." +this.element);
    this.orderByClause.emit(orderByClause);
  }

}
