import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { homedetail } from './home/home.component';
import { contacts } from './contact/contact.component';

const routes : Routes = [
  { path: ' ', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: homedetail },
  { path: 'contact', component: contacts }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
