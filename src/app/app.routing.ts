import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    component: ListComponent
  }, {
    path: 'form',
    component: FormComponent
  }, {
    path: 'form/:id',
    component: FormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
