import { Component } from '@angular/core';
import { Iempresas } from '../service/iempresas';
import { ClientesService } from '../service/clientes.service';
import { ActivatedRoute,Router } from '@angular/router';
import{FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-listarempresa',
  templateUrl: './listarempresa.component.html',
  styleUrls: ['./listarempresa.component.scss']
})
export class ListarempresaComponent {
    empresa: Iempresas[] = [];

    form = new FormGroup({
    id: new FormControl(),
    cnpj: new FormControl(''),
    endereco: new FormControl(),
    socios: new FormControl(),
    faturamento: new FormControl(),
    })
    constructor(
      private service: ClientesService, 
      private router: Router, 
      private route: ActivatedRoute){ }
  
    ngOnInit(): void {
       this.Listar();
    }
  
    Listar(){
       // a minha variavel do tipo cursos está recebendo o json da API
       this.service.listar().subscribe(dados => this.empresa = dados);
    }
  
    Editar(id:number){
      this.router.navigate(['editar', id], {relativeTo: this.route});
    }
  
    Excluir(id:number){
      this.service.excluir(id).subscribe(
        success => {
          alert("Empresa excluida com sucesso!")
          this.service.listar().subscribe(dados => this.empresa = dados);
        },
        Error => alert("Erro ao excluir a Empresa ")
      );
    }
}
