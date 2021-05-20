import {Action} from './action.model';
import {Variable} from './variable';
import {DataEntry} from './dataEntry';

export class ActionExecutionDto{
  id: number;
  action: Action;
  variable: Variable;
  dataEntry: DataEntry;
  testCaseId: number;
  testCaseExecutionId: number;
  status: string;
}
