import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      },
      {
        path: 'landing',
        loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
      },
      {
        path: 'log-in',
        loadChildren: () => import('./modules/log-in/log-in.module').then((m) => m.LogInModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
