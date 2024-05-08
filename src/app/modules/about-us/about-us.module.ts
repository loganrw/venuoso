import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { CompanyComponent } from './company/company.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsRoutingModule } from './about-us.routing.module';



@NgModule({
  declarations: [
    CompanyComponent,
    MeetTheTeamComponent,
    AboutUsPageComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HttpClientModule,
  ]
})
export class AboutUsModule { }
