import {Variable} from './variable';

export class ActionDto {
  actionInstanceId: number;
  name: string;
  variables: Variable[];

  constructor(actionInstanceId: number, name: string, variables: Variable[]) {
    this.actionInstanceId = actionInstanceId;
    this.name = name;
    this.variables = variables;
  }
}
