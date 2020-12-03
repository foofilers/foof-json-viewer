import {Component} from '@angular/core';
import {FoofJsonSegment, FoofJsonViewerComponentClickEvent} from '../../../foof-json-viewer/src/lib/foof-json-viewer.component';

const userIdRe = new RegExp('students\.\\d*\.id');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message = '';
  data = {
    schoolName: 'Json School',
    students: [{
      id: '123',
      name: 'user1'
    }],
  };

  isClickable(segment: FoofJsonSegment): boolean {
    return userIdRe.test(segment.path);
  }

  segmentClickHandler(segmentEvent: FoofJsonViewerComponentClickEvent) {
    if (userIdRe.test(segmentEvent.segment.path)) {
      this.message = `you have clicked on user with id:${segmentEvent.segment.value} ctrlPressed:${segmentEvent.mouseEvent.ctrlKey}`;
    }
  }
}
