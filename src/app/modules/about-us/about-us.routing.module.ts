import { RouterModule, Routes } from "@angular/router";
import { AboutUsPageComponent } from "./about-us-page/about-us-page.component";
import { NgModule } from "@angular/core";


  const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AboutUsPageComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
}) export class AboutUsRoutingModule { }