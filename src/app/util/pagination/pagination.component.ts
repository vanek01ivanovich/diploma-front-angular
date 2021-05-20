import {
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @ViewChildren('pageElement') pagesElement: QueryList<ElementRef> = new QueryList<ElementRef>();
  @Output() clickPage: EventEmitter<number> = new EventEmitter<number>();
  @Input() quantityPages: number;
  @Input() sizePage: number;
  currentPage = 1;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => this.eventClickPage(this.currentPage), 1);
  }

  eventClickPage(page: number) {
    this.clickPage.emit(page);
    this.setActiveButton(page);
  }

  getNextPage() {
    this.eventClickPage(this.currentPage + 1);
  }

  getPreviousPage() {
    this.eventClickPage(this.currentPage - 1);
  }

  private setActiveButton(page: number) {
    this.renderer.removeClass(this.pagesElement.toArray()[this.currentPage - 1].nativeElement, 'active');
    this.currentPage = page;
    this.renderer.addClass(this.pagesElement.toArray()[this.currentPage - 1].nativeElement, 'active');
  }

}
