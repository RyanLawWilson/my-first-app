import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Needed to perform two-way-binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // TypeScript needs to know where to find this new component.  Don't put .ts
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'
import { AddUsernameComponent } from './add-username/add-username.component';
import { DisplayDetails } from './display-details/display-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent, // In Angular, new components are declared here 
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AddUsernameComponent,
    DisplayDetails
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
