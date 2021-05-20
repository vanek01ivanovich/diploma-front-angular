import {DataEntry} from './data-entry';

export class Variable {
  id: number;
  name: string;
  dataEntry?: DataEntry;
  variableValueId?: number;

  constructor(id: number, name: string, dataEntry: DataEntry, variableValueId: number) {
    this.id = id;
    this.name = name;
    this.dataEntry = dataEntry;
    this.variableValueId = variableValueId;
  }
}
