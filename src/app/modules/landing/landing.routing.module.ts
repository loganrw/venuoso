import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: LandingPageComponent
            },
            {
                path: 'landing',
                component: LandingPageComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
}) export class LandingRoutingModule { }