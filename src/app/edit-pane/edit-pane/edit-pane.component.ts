import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogModel } from '../../shared/blog-model';

@Component({
  selector: 'sb-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {
  // @todo actually get the testing framework to do this
  @Input() blog: BlogModel = {
    id: 'empty-blog',
    title: 'empty title',
    author: '',
    date: Date.now()
  };
  @Output() save = new EventEmitter<BlogModel>();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.save.emit(this.blog);
  }
}
