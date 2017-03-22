import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogModel } from '../../shared/blog-model';

@Component({
  selector: 'sb-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  @Input() blog: BlogModel;
  @Output() edit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit();
  }

}
