import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path:'temp', component : TemplateFormComponent},
  {path:'react', component : ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
