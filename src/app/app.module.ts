import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditPaneModule } from './edit-pane/edit-pane.module';
import { BlogViewModule } from './blog-view/blog-view.module';
import { SharedModule } from './shared/shared.module';
import { BlogListModule } from './blog-list/blog-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // custom modules
    BlogListModule,
    BlogViewModule,
    EditPaneModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
