import {Compound} from './compound';
import {ActionDto} from './action-dto';

export class ScenarioStep {
  priority: number;
  compound?: Compound;
  actionDto: ActionDto[];

  constructor(priority: number, compound: Compound, actions: ActionDto[]) {
    this.priority = priority;
    this.compound = compound;
    this.actionDto = actions;
  }
}
