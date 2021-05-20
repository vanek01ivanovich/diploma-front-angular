import {ActionWithPriority} from './ActionWithPriority';

export interface CompoundWithActions {
  id: number;
  actions: ActionWithPriority[];
}
