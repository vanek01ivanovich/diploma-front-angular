import {Component, OnDestroy, OnInit} from '@angular/core';
import {Compound} from '../model/compound.model';
import {CompoundAction} from '../model/compoundAction';
import {Action} from '../model/action.model';
import {CompoundService} from '../services/compound.service';
import Swal from 'sweetalert2';
import {CompoundDto} from '../model/compound-dto';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-create-compound',
  templateUrl: './create-compound.component.html',
  styleUrls: ['./create-compound.component.css']
})
export class CreateCompoundComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  actions: Action[] = [];
  compound = new Compound(1, '', '');
  compoundActions: CompoundAction[] = [];
  arrayForPassing: CompoundDto;
  name: string;
  description: string;

  constructor(private compoundService: CompoundService , private router: Router) { }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  setName(name: string) {
    this.name = name;
  }

  setDescription(description: string) {
    this.description = description;
  }

  createCompound(actions: Action[]) {
    this.actions = actions;
  }

  saveCompound() {
    if (this.name === '' || this.name == null ||
      this.description === '' || this.description == null){
      this.alertValidate();
    }else{
      this.compound.name = this.name;
      this.compound.description = this.description;
      this.checkIfCompoundExist();
    }
  }

  checkIfCompoundExist() {
    this.subscriptions.add(
      this.compoundService.checkIfCompoundNameExist(this.compound.name).subscribe(res => {
        this.alert(res);
      })
    );
  }

  fillTheCompoundActionPriority(){
    if (this.actions.length > 0) {
      this.actions.forEach((value, index) => {
        this.compoundActions.push(new CompoundAction(value.actionId, index + 1));
      });
      this.insertCompAndActions();
    }else{
      this.alertValidate();
    }
  }

  insertCompAndActions() {
    this.arrayForPassing = new CompoundDto(this.compound.name, this.compound.description, this.compoundActions);
    this.subscriptions.add(
      this.compoundService.createCompound(this.arrayForPassing).subscribe(res => {
        this.alertSuccess();
      })
    );
  }

  alertSuccess(){
    Swal.fire({icon: 'success',
      title: 'ok',
      text: 'Compound was created successfully!'});
    this.router.navigate(['/library']);
  }

  alert(res: boolean) {
    if (res){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check your name!'});
    }else{
      this.fillTheCompoundActionPriority();
    }
  }

  alertValidate() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Validate your info!'});
  }
}
