import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit {

  tab = 'first';

  constructor() {
  }

  ngOnInit(): void {
  }

}
