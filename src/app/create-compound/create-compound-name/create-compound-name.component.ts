import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-compound-name',
  templateUrl: './create-compound-name.component.html',
  styleUrls: ['./create-compound-name.component.css']
})
export class CreateCompoundNameComponent implements OnInit {

  compoundName: string;
  compoundDescription: string;
  @Output()name = new EventEmitter<string>();
  @Output()description = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  setNameDescription(){
    this.name.emit(this.compoundName);
    this.description.emit(this.compoundDescription);
  }

}
