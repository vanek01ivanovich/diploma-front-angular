import { Component, OnInit } from '@angular/core';
import {Compound} from '../model/compound.model';
import {ActivatedRoute} from '@angular/router';
import {CompoundService} from '../services/compound.service';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {

  pageCompoundActions = true;
  idCompound: any;
  nameBefore: string;
  compound: Compound;
  constructor(private route: ActivatedRoute, private compoundService: CompoundService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.idCompound = value.get('id');
    });
    this.getCompound(this.idCompound);
  }

  getCompound(idCompound: any) {
    this.compoundService.getCompound(idCompound).subscribe(res => {
      this.compound = res;
      this.nameBefore = this.compound.name;
    });
  }

}
