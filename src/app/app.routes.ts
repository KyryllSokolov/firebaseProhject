import { Routes } from '@angular/router';
import { GreatingComponent } from './greating/greating.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { EditCreateUserComponent } from './edit-create-user/edit-create-user.component';

export const routes: Routes = [
  { path: 'greating', component: GreatingComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'create', component: EditCreateUserComponent},
  { path: '', redirectTo: '/greating', pathMatch: 'full' },
];


