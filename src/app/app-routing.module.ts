import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { LoginGuardGuard } from './services/guards/login-guard.guard';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const Approutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: FullComponent,
    canActivate: [ LoginGuardGuard ],
    loadChildren: './pages/pages.module#PagesModule'
    // children: [
      // { 
      //   path: '',
      //   component: FullComponent, pathMatch: 'full' ,
      // { path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule' },
      // { path: 'dashboard', loadChildren: './pages/pages.module#PagesModule' },
      // { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
      // { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
      // { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
      // { path: 'forms', loadChildren: './form/forms.module#FormModule' },
      // { path: 'tables', loadChildren: './table/tables.module#TablesModule' },
      // { path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
      // { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
      // { path: 'extra-component', loadChildren: './extra-component/extra-component.module#ExtraComponentModule' },
      // { path: 'apps', loadChildren: './apps/apps.module#AppsModule' },
      // { path: 'sample-pages', loadChildren: './sample-pages/sample-pages.module#SamplePagesModule' }
    // ]
  },
  // {
  //   path: '',
  //   component: BlankComponent,
  //   children: [
  //     {
  //       path: 'authentication',
  //       loadChildren: './authentication/authentication.module#AuthenticationModule'
  //     }
  //   ]
  // },
  {
    path: '**',
    component: NopagefoundComponent
  }
];

export const APP_ROUTES = RouterModule.forRoot( Approutes, { useHash: true } );
