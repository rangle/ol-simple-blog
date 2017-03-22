import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {
  @Input() body = '';
  @Output() save = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.save.emit(this.body);
  }
}
