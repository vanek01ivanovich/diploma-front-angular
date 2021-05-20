import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditDataEntryComponent} from '../edit-data-entry/edit-data-entry.component';
import {DataSet} from '../../model/dataSet';

@Component({
  selector: 'app-edit-name-data-set',
  templateUrl: './edit-name-data-set.component.html',
  styleUrls: ['./edit-name-data-set.component.css']
})
export class EditNameDataSetComponent implements OnInit {

  @Input()dataSet: DataSet;

  ngOnInit(): void {}

  save(){
    return this.dataSet;
  }
  setValue(name: string) {
    this.dataSet.name = name;
  }
}
