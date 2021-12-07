import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCreatePage } from './event-create.page';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EventCreatePage
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(routes),
     ReactiveFormsModule,
     FormsModule
  ],
  exports: [RouterModule],
})
export class EventCreatePageRoutingModule {}
