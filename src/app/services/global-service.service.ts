import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {TestCaseExecution} from "../model/testCaseExecution";

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
 itemValue = new BehaviorSubject(this.theItem);

 set theItem(value) {
  if(value !== null) {
   this.itemValue.next(value);
   localStorage.setItem('theItem', value);
   }
 }
 get theItem() {
   return localStorage.getItem('theItem');
 }

  constructor() { }
}
