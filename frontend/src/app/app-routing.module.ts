import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsComponent } from './components/abs/abs.component';
import { AddAbsComponent } from './components/add-abs/add-abs.component';
import { AddCollabComponent } from './components/add-collab/add-collab.component';
import { AddTacheToServiceComponent } from './components/add-tache-to-service/add-tache-to-service.component';
import { AddTacheComponent } from './components/add-tache/add-tache.component';
import { CollabsComponent } from './components/collabs/collabs.component';

import { ServicesComponent } from './components/services/services.component';
import { UpdateAbsComponent } from './components/update-abs/update-abs.component';
import { UpdateCollabComponent } from './components/update-collab/update-collab.component';
import { UpdateTacheComponent } from './components/update-tache/update-tache.component';

const routes: Routes = [
  {path: 'collabs', component: CollabsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'add-collab', component: AddCollabComponent},
  {path: 'add-Tache', component: AddTacheComponent},
  {path: 'add-tache-to-Service/:id', component: AddTacheToServiceComponent},
 
  {path: '', redirectTo: 'collabs', pathMatch: 'full'},
  {path: 'update-collab/:id', component: UpdateCollabComponent},
  {path: 'update-tache/:idS/:idStache', component: UpdateTacheComponent},
  {path: 'abs', component: AbsComponent},
  {path: 'add-abs', component: AddAbsComponent},
  {path: 'update-abs/:id', component: UpdateAbsComponent},

 /* {path: 'employee-details/:id', component: EmployeeDetailsComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
