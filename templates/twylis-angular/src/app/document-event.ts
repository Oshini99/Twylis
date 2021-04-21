import {Feature} from './feature';

export class DocumentEvent {
  includeBorders: boolean;
  items: Array<Feature>;

  constructor() {
    this.includeBorders = false;
    this.items = [];
  }
}
