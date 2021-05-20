import {CompoundAction} from './compoundAction';

export class CompoundDto{
  name: string;
  description: string;
  actionList: CompoundAction[];

  constructor(name: string, description: string, actionList: CompoundAction[]) {
    this.name = name;
    this.description = description;
    this.actionList = actionList;
  }
}
