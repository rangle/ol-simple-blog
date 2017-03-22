import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPaneComponent } from './edit-pane/edit-pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditPaneComponent],
  exports: [EditPaneComponent],
})
export class EditPaneModule { }
