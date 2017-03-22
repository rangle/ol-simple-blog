import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogListComponent],
  exports: [BlogListComponent]
})
export class BlogListModule { }
