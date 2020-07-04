import { NgModule } from '@angular/core';
import { FoofJsonViewerComponent } from './foof-json-viewer.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [FoofJsonViewerComponent],
  imports: [
    BrowserModule
  ],
  exports: [FoofJsonViewerComponent]
})
export class FoofJsonViewerModule { }
