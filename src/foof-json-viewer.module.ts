import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoofJsonViewerComponent } from './foof-json-viewer/foof-json-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FoofJsonViewerComponent
  ],
  exports: [
    FoofJsonViewerComponent
  ]
})
export class FoofJsonViewerModule { }
