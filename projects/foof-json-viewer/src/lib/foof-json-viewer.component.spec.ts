import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoofJsonViewerComponent } from './foof-json-viewer.component';

describe('FoofJsonViewerComponent', () => {
  let component: FoofJsonViewerComponent;
  let fixture: ComponentFixture<FoofJsonViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoofJsonViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoofJsonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
