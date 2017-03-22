import { Component } from '@angular/core';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  blog = 'Some existing blog';
  isEditMode = false;

  onBlogSave(body: string) {
    this.blog = body;
    this.isEditMode = false;
  }

  onEdit() {
    this.isEditMode = true;
  }
}
