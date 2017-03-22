import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogModel } from '../../shared/blog-model';

@Component({
  selector: 'sb-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() list: string[];
  @Output() selectBlog = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(id: string) {
    this.selectBlog.emit(id);
  }

}
