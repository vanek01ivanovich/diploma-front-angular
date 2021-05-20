import {AfterViewInit,  EventEmitter, Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit {

  @Output() tabChange = new EventEmitter();
  tab = 'first';

  @ViewChild('firstTab') firstTab: ElementRef;
  @ViewChild('secondTab') secondTab: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.firstTab.nativeElement.classList.add('active');
  }

  onTabClick(tab: string): void {
    this.tab = tab;
    if (tab === 'first'){
      this.firstTab.nativeElement.classList.add('active');
      this.secondTab.nativeElement.classList.remove('active');
    } else {
      this.secondTab.nativeElement.classList.add('active');
      this.firstTab.nativeElement.classList.remove('active');
    }
    this.tabChange.emit(tab);
  }


}
