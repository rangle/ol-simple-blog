import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaneComponent } from './edit-pane.component';

describe('EditPaneComponent', () => {
  let component: EditPaneComponent;
  let fixture: ComponentFixture<EditPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
