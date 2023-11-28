import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarempresaComponent} from './listarempresa/listarempresa.component';
import { ClientesRoutingModule } from './empresa-routing.module';
@NgModule({
  declarations: [
    ListarempresaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }