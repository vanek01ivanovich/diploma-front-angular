import {Component, OnDestroy, OnInit} from '@angular/core';
import {Compound} from '../../model/compound.model';
import {Action} from '../../model/test-scenario/Action';
import {ActivatedRoute, Router} from '@angular/router';
import {LibraryCompoundService} from '../../services/library-compound.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-compound-actions',
  templateUrl: './list-compound-actions.component.html',
  styleUrls: ['./list-compound-actions.component.css']
})
export class ListCompoundActionsComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  compound: Compound = {id: 0, name: '', description: ''};
  actions: Action[] = [];
  isDeleted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private compoundService: LibraryCompoundService) {
  }

  ngOnInit(): void {
    this.initFields();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  comeBackToPreviousPage(): void {
    this.router.navigate(['/library']).then();
  }

  deleteCompound(): void {
    this.subscription.add(
      this.compoundService.archiveCompoundById(this.compound.id)
        .subscribe(() => {}, error => console.log(error))
    );
    this.isDeleted = true;
    setTimeout(() => this.comeBackToPreviousPage(), 2000);
  }

  private initFields() {
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        this.subscription.add(
          this.compoundService.getCompoundById(parseInt(params.get('id') as string, 0))
            .subscribe(compound => {
              this.compound = compound;
              this.subscription.add(
                this.compoundService.getAllActionsOfCompoundByCompoundId(this.compound.id)
                  .subscribe(actions => this.actions = actions,
                    error => console.log(error)));
            }, error => console.log(error)));
      }, error => console.log(error)));
  }
}
