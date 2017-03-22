import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditPaneModule } from './edit-pane/edit-pane.module';
import { BlogViewModule } from './blog-view/blog-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // custom modules
    BlogViewModule,
    EditPaneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
