export class DataEntry {
  id: number;
  value: string;
  data_set_id: number;
  key?: string;

  constructor(id: number, value: string, data_set_id: number, key: string) {
    this.id = id;
    this.value = value;
    this.data_set_id = data_set_id;
    this.key = key;
  }

}
