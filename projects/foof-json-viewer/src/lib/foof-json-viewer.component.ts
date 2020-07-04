import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

export interface FoofJsonSegment {
  parent: FoofJsonSegment | undefined;
  key: string;
  value: any;
  type: undefined | string;
  description: string;
  expanded: boolean;
  path: string;
}

type IsSegmentClickableFn = (segment: FoofJsonSegment) => boolean;

@Component({
  selector: 'foof-json-viewer',
  templateUrl: './foof-json-viewer.component.html',
  styleUrls: ['./foof-json-viewer.component.scss']
})
export class FoofJsonViewerComponent implements OnChanges {

  @Input() json: any;
  @Input() expanded = true;
  @Input() isSegmentClickable: IsSegmentClickableFn;
  // tslint:disable-next-line:variable-name
  @Input() _parent: FoofJsonSegment | undefined = undefined;
  @Output() segmentClicked = new EventEmitter<FoofJsonSegment>();

  segments: FoofJsonSegment[] = [];

  ngOnChanges() {
    if (typeof this.json === 'object') {
      Object.keys(this.json).forEach(key => {
        this.segments.push(this.parseKeyValue(key, this.json[key]));
      });
    } else {
      this.segments.push(this.parseKeyValue(`(${typeof this.json})`, this.json));
    }
  }

  isExpandable(segment: FoofJsonSegment) {
    return segment.type === 'object' || segment.type === 'array';
  }

  toggle(segment: FoofJsonSegment) {
    if (this.isExpandable(segment)) {
      segment.expanded = !segment.expanded;
    }
  }

  segmentClickHandler(segment: FoofJsonSegment) {
    this.segmentClicked.emit(segment);
  }

  isClickable(segment: FoofJsonSegment): boolean {
    return this.isSegmentClickable && this.isSegmentClickable(segment);
  }

  private parseKeyValue(key: any, value: any): FoofJsonSegment {
    const segment: FoofJsonSegment = {
      parent: this._parent,
      path: this._parent ? `${this._parent.path}.${key}` : key,
      key,
      value,
      type: undefined,
      description: '' + value,
      expanded: this.expanded
    };

    switch (typeof segment.value) {
      case 'number': {
        segment.type = 'number';
        break;
      }
      case 'boolean': {
        segment.type = 'boolean';
        break;
      }
      case 'function': {
        segment.type = 'function';
        break;
      }
      case 'string': {
        segment.type = 'string';
        segment.description = '"' + segment.value + '"';
        break;
      }
      case 'undefined': {
        segment.type = 'undefined';
        segment.description = 'undefined';
        break;
      }
      case 'object': {
        // yea, null is object
        if (segment.value === null) {
          segment.type = 'null';
          segment.description = 'null';
        } else if (Array.isArray(segment.value)) {
          segment.type = 'array';
          segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
        } else if (segment.value instanceof Date) {
          segment.type = 'date';
        } else {
          segment.type = 'object';
          segment.description = 'Object ' + JSON.stringify(segment.value);
        }
        break;
      }
    }

    return segment;
  }
}
