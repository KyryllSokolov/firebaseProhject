import { Routes } from '@angular/router';
import { GreatingComponent } from './greating/greating.component';
import { WorkspaceComponent } from './workspace/workspace.component';

export const routes: Routes = [
  { path: 'greating', component: GreatingComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: '', redirectTo: '/greating', pathMatch: 'full' },
];


