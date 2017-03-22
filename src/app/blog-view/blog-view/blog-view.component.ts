import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  @Input() body = '';
  @Output() edit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit();
  }

}
