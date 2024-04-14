import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { LogInRoutingModule } from './log-in.routing.module';
import { LogInService } from './services/log-in.service';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
  ],
  providers: []
})
export class LogInModule { }
