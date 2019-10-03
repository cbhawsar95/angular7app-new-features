import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import {  
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropSortingComponent } from './drag-drop-sorting/drag-drop-sorting.component';
import { BasicVitualScrollComponent } from './basic-vitual-scroll/basic-vitual-scroll.component';
import { ScrollContextVariableComponent } from './scroll-context-variable/scroll-context-variable.component';
import { BasicSelectComponent } from './basic-select/basic-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent,
    DragDropSortingComponent,
    BasicVitualScrollComponent,
    ScrollContextVariableComponent,
    BasicSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ScrollDispatchModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
