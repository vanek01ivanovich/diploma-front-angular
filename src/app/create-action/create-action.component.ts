import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {LibraryActionService} from '../services/library-action.service';

@Component({
  selector: 'app-create-action',
  templateUrl: './create-action.component.html',
  styleUrls: ['./create-action.component.css']
})
export class CreateActionComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  value_array: number[];
  counter: number;

  createAction = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    variable_names: new FormArray([new FormControl()])
  });

  constructor(private service: LibraryActionService) { }

  ngOnInit(): void {
    this.value_array = [1];
    this.counter = 1;
  }

  addValue() {
    this.value_array.push(this.counter++);
    (this.createAction.controls.variable_names as FormArray).push( new FormControl(''));
  }

  delete(i: number) {
    this.value_array.splice(i, 1);
    (this.createAction.controls.variable_names as FormArray).removeAt(i);
  }

  onSubmit(customerData: any) {
    this.service.createAction(customerData.name, customerData.description, customerData.variable_names);
  }
}
