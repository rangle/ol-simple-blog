import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogViewComponent],
  exports: [BlogViewComponent],
})
export class BlogViewModule { }
