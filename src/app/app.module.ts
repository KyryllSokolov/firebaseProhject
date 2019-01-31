import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { GreatingComponent } from './greating/greating.component';
import { routes } from './app.routes';
import { WorkspaceComponent } from './workspace/workspace.component';
import { EditCreateUserComponent } from './edit-create-user/edit-create-user.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    GreatingComponent,
    WorkspaceComponent,
    EditCreateUserComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestorm-expert'),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
