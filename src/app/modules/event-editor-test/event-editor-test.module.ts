import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEditorTestPageComponent } from './event-editor-test-page/event-editor-test-page.component';
import { EventEditorTestComponent } from './event-editor-test/event-editor-test.component';
import { HttpClientModule } from '@angular/common/http';
import { EventEditorTestRoutingModule } from './event-editor-test.routing.module';



@NgModule({
  declarations: [
    EventEditorTestComponent,
    EventEditorTestPageComponent,
  ],
  imports: [
    CommonModule,
    EventEditorTestRoutingModule,
    HttpClientModule,
  ]
})
export class EventEditorTestModule { }
