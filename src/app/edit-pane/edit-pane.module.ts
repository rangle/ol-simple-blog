import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPaneComponent } from './edit-pane/edit-pane.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EditPaneComponent],
  exports: [EditPaneComponent],
})
export class EditPaneModule { }
