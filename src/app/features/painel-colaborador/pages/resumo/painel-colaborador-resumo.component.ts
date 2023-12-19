import { Component, OnInit} from "@angular/core";
import { BaseComponent } from "../../../../shared/base/components/base-page/base.component";
import { Utils } from "../../../../shared/services/utils.service";
import { InputCardFunc } from "../../../../shared/template/card-func/card-func.model";
import { FuncionariosFilter, FuncionariosGrid, FuncionarioSuperiorGrid } from "../../entity/painel-colaborador.model";

@Component({
  selector: 'painel-colaborador-resumo',
  templateUrl: './painel-colaborador-resumo.component.html',
  styleUrls: ['./painel-colaborador-resumo.component.css']
})
export class PainelColaboradorResumoComponent extends BaseComponent implements OnInit {

  card_func = new InputCardFunc()
  cardSuperiorFuncionario = new InputCardFunc()
  funcionariosList: FuncionariosGrid[]
  funcionario: FuncionariosGrid = new FuncionariosGrid()
  funcionariosSuperiorList: FuncionarioSuperiorGrid[]
  funcionarioSuperior: FuncionarioSuperiorGrid = new FuncionarioSuperiorGrid()
  carregando: boolean = true
  hasSuperior:boolean = true
  
  async ngOnInit(): Promise<void> {
    
    this.carregando = true

    await this.buscaFuncionario()

    await this.buscaSuperiorFuncionario()

    this.carregando = false

  }

  async buscaFuncionario():Promise<void>{

    let filter: FuncionariosFilter = new FuncionariosFilter()
    filter.idCliente = this.sessaoApp.idClienteSelecionado
    
    this.funcionariosList = await this.helpers.painelColaborador._GET(filter)

    this.funcionario = this.funcionariosList.filter(funcionario => funcionario.idFuncionarioControleUsuarioSite == this.sessaoApp.usuarioLogado.Id)[0]
  
  }

  async buscaSuperiorFuncionario():Promise<void>{

    let filter: FuncionariosFilter = new FuncionariosFilter()
    filter.idCliente = this.sessaoApp.idClienteSelecionado

    this.funcionariosSuperiorList = await this.helpers.painelColaborador.getSuperiorFuncionarios(filter)

    if(this.funcionariosSuperiorList.length > 0){

      this.funcionarioSuperior = this.funcionariosSuperiorList.filter(funcionarioBusca => funcionarioBusca.idFuncionario == this.funcionario.idFuncionario)[0]

      if(this.funcionarioSuperior.idGestorEquipe == this.funcionario.idFuncionario
        || this.funcionarioSuperior.idGestorEquipe == 0){
          this.hasSuperior = false
        }
    }
    else{
      this.hasSuperior = false
    }

  }

  getFoto(): string {

    if(Utils.isNotNull(this.funcionario.foto))
      this.card_func.foto = this.funcionario.foto

    return this.card_func.foto
  }

  getFotoSuperior(): string {

    if(Utils.isNotNull(this.funcionarioSuperior.foto))
      this.cardSuperiorFuncionario.foto = this.funcionarioSuperior.foto

    return this.cardSuperiorFuncionario.foto
  }

}