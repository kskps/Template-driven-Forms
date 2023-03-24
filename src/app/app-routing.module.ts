import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './container/template/template.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ReactiveComponent } from './container/reactive/reactive.component';

const routes: Routes = [
  {path:'temp', component : TemplateComponent},
  {path:'react', component : ReactiveComponent},
  {path:'array', component : FormArrayComponent},
  {path:'profile', component : ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
