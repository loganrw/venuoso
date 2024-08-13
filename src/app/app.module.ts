import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingModule } from "./modules/landing/landing.module";
import { LogInModule } from "./modules/log-in/log-in.module";
import { ContactFormService } from "./services/contact-form/contact-form.service";
import { BrowserModule } from "@angular/platform-browser";
import { AboutUsModule } from "./modules/about-us/about-us.module";
import { MatIconModule } from '@angular/material/icon';
import { EventEditorModule } from "./components/event-editor/event-editor.module";
import { EventEditorTestModule } from "./modules/event-editor-test/event-editor-test.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        AppRoutingModule,
        LandingModule,
        LogInModule,
        BrowserModule,
        AboutUsModule,
        MatIconModule,
        EventEditorModule,
        EventEditorTestModule
    ],
    providers: [
        provideAnimationsAsync(),
        ContactFormService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }