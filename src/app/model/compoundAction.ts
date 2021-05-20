export class CompoundAction{
  id: number;
  compoundId: number;
  actionId: number;
  priority: number;

  constructor(actionId: number, priority: number) {
    this.actionId = actionId;
    this.priority = priority;
  }

}
