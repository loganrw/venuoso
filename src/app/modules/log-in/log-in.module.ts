import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { LogInRoutingModule } from './log-in.routing.module';
import { LogInService } from './services/log-in.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    MatIconModule,
  ],
  providers: []
})
export class LogInModule { }
