import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Action} from '../../model/action.model';
import {LibraryActionService} from '../../services/library-action.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-compound-actions',
  templateUrl: './create-compound-actions.component.html',
  styleUrls: ['./create-compound-actions.component.css']
})

export class CreateCompoundActionsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  actions: Action[];
  actionsReserved: Action[] = [];
  actionsInCompound: Action[] = [];
  @Output()createdActionsInCompound = new EventEmitter<Action[]>();

  constructor(private actionService: LibraryActionService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.actionService.getAllActions().subscribe(( res => {
        this.actions = Object.assign([], res);
        this.actionsReserved = Object.assign([], res);
      }))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  drop(event: CdkDragDrop<Action[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.actions = Object.assign([], this.actionsReserved);
    }
    this.createdActionsInCompound.emit(this.actionsInCompound);
  }
}
