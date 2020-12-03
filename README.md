# foof-json-viewer

JSON viewer for Angular 

Live demo: https://stackblitz.com/edit/foof-json-viewer

## Install
```bash
npm install foof-json-viewer
```
NPM Package: https://www.npmjs.com/package/foof-json-viewer

## Usage

In your `app.module.ts` import `FoofJsonViewerModule` like
```js
import { FoofJsonViewerModule } from 'foof-json-viewer';

@NgModule({
  ...,
  imports: [
    ...,
    FoofJsonViewerModule,
    ...
  ],
  ...
})
export class AppModule { }
```

In your component:
```html
<foof-json-viewer [json]="someObject"></foof-json-viewer>
```

To collapse all nodes at first:
```html
<foof-json-viewer [json]="someObject" [expanded]="false"></foof-json-viewer>
```

To make the segment clickable

HTML
```html
<foof-json-viewer [json]="someObject" 
    [isSegmentClickable]="isClickable"
    (segmentClicked)="segmentClickHandler($event)"></foof-json-viewer>
```
TS
```typescript
const someObject = {users:[{id:123, name:"user1"},{id:234, name:"user2"}]};

function isClickable(segment:FoofJsonSegment):boolean{
    return segment.path === "users.0.id";
}
function segmentClickHandler(segmentClick:FoofJsonViewerComponentClickEvent){
    if (segmentClick.segment.path === "users.0.id"){
        console.log(`the userId is ${segmentClick.segment.value}`);
    }
}
```

