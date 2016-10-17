import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddressService } from './address.service';
import { AddressFormComponent } from './address-form/address-form.component';
import { FormComponent } from './form/form.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddressFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
