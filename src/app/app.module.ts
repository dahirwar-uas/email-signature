import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonEmailSignatureComponent } from './shared/person-email-signature.component';
import { SharedEmailSignatureComponent } from './shared/shared-email-signature.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PersonEmailSignatureComponent,
    SharedEmailSignatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
