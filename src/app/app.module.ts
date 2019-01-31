import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { RouterModule } from '@angular/router';
import { GreatingComponent } from './greating/greating.component';
import { routes } from './app.routes';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    GreatingComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'firestorm'),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
