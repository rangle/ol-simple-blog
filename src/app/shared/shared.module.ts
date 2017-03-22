import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { BlogApiService } from './blog-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [ ApiService, BlogApiService ]
})
export class SharedModule { }
