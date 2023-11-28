import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEmpresaComponent } from './empresa/form-empresa/form-empresa.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'empresa', loadChildren:()=> FormEmpresaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
