import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ModalComponent } from './component/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateComponent } from './container/template/template.component';
import { TemplateDataComponent } from './component/template-data/template-data.component';
import { ReactiveComponent } from './container/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    ProfileComponent,
    ModalComponent,
    TemplateComponent,
    TemplateDataComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
