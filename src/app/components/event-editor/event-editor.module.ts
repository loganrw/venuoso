import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventEditorRoutingModule } from './event-editor.routing.module';
import { EventEditorComponent } from './event-editor.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [EventEditorComponent],
  imports: [
    CommonModule, 
    HttpClientModule, 
    EventEditorRoutingModule,
    MatIcon
  ],
})
export class EventEditorModule {}

