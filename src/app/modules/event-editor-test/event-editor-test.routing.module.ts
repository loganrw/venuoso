import { RouterModule, Routes } from "@angular/router";
import { EventEditorTestPageComponent } from "./event-editor-test-page/event-editor-test-page.component";
import { NgModule } from "@angular/core";


  const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: EventEditorTestPageComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
}) export class EventEditorTestRoutingModule { }