import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotifListComponent} from './components/notif-list/notif-list.component';
import {NotifCreateComponent} from './components/notif-create/notif-create.component'
import {NotifUpdateComponent} from './components/notif-update/notif-update.component'

const routes: Routes = [
  { path: '', redirectTo: 'notif-list', pathMatch: 'full' },
  { path : 'notif-list', component: NotifListComponent },
  { path: 'create', component: NotifCreateComponent },
  { path: 'update', component: NotifUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
