import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CardEquipe } from "./card-equipe/card-equipe.model";
import { FuncionariosGrid } from "../../../entity/painel-colaborador.model";

@Component({
  selector: 'painel-colaborador-tabs-equipe',
  templateUrl: './painel-colaborador-tabs-equipe.component.html',
  styleUrls: ['./painel-colaborador-tabs-equipe.component.css'],
//   encapsulation: ViewEncapsulation.None
})
export class PainelColaboradorTabsEsquipeComponent implements OnInit {

    funcionariosList: number[] = [1,1,1,1,1,1,1,1]
//   funcionario: FuncionariosGrid = new FuncionariosGrid()
//   funcionariosSuperiorList: FuncionarioSuperiorGrid[] = []
//   funcionarioSuperior: FuncionarioSuperiorGrid = new FuncionarioSuperiorGrid()
  cards: CardEquipe[] = []
//   funcionariosEquipeGestorList: FuncionariosGrid[] = []
//   carregando: boolean = true

  async ngOnInit(): Promise<void> {

          this.funcionariosList.forEach(funcionario => {
            this.cards.push(new CardEquipe())
      })
    
    // this.carregando = true

    // await this.buscaFuncionarios()

    // await this.buscaSuperiorFuncionario()

    // await this.buscaEquipeFuncionario()

    // this.carregando = false

  }

//   async buscaFuncionarios(): Promise<void>{

//     this.funcionariosList = await this.helpers.painelColaborador._GET(new FuncionariosFilter({
//       idCliente: this.sessaoApp.idClienteSelecionado
//     }))

//     this.funcionario = this.funcionariosList.filter(funcionario => funcionario.idFuncionarioControleUsuarioSite == this.sessaoApp.usuarioLogado.Id)[0]

//   }

//   async buscaSuperiorFuncionario():Promise<void>{

//     this.funcionariosSuperiorList = await this.helpers.painelColaborador.getSuperiorFuncionarios(new FuncionariosFilter({
//       idCliente: this.sessaoApp.idClienteSelecionado
//     }))

//     if(this.funcionariosSuperiorList.length > 0)
//       this.funcionarioSuperior = this.funcionariosSuperiorList.filter(funcionarioBusca => funcionarioBusca.idFuncionario == this.funcionario.idFuncionario)[0]
//   }

//   async buscaEquipeFuncionario(): Promise<void>{

//     let funcionarioIsGestor: boolean = false

//     if(this.funcionariosSuperiorList.find(funcionario => funcionario.idGestorEquipe == this.funcionario.idFuncionario)){
//       funcionarioIsGestor = true
//     }

//     if(funcionarioIsGestor){
//       await this.buscaEquipeFuncionarioGestor()
//     }
//     else{

//       let departamento: string = ''

//       if(this.funcionario.departamento.includes('PRODUTOS')){

//         departamento = 'DESENVOLVIMENTO'
//       }
//       else{

//         departamento = this.funcionario.departamento
//       }

//       if(this.funcionarioSuperior.idGestorEquipe > 0){
  
//         this.funcionariosList = this.funcionariosList
//         .filter(funcionarioBusca => funcionarioBusca.departamento
//         .includes(departamento) 
//           && funcionarioBusca.idFuncionario != this.funcionario.idFuncionario 
//           && funcionarioBusca.idFuncionario != this.funcionarioSuperior.idGestorEquipe)
//         .sort((a, b) => a.nome.localeCompare(b.nome))
  
//       }
//       else{
  
//         this.funcionariosList = this.funcionariosList
//         .filter(funcionarioBusca => funcionarioBusca.departamento
//         .includes(departamento) 
//           && funcionarioBusca.idFuncionario != this.funcionario.idFuncionario)
//         .sort((a, b) => a.nome.localeCompare(b.nome))
//       }
      
  
//       this.funcionariosList.forEach(funcionario => {
//         this.cards.push(new CardEquipe({
//             nome: funcionario.nome,
//             cargo: funcionario.cargo,
//             departamento: funcionario.departamento,
//             foto: funcionario.foto
//         }))
//       })
//     }

//   }

//   async buscaEquipeFuncionarioGestor(): Promise<void>{

//     this.funcionariosList.forEach(funcionario => {

//       this.funcionariosSuperiorList.forEach(funcionarioSuperior => {

//         if(funcionario.idFuncionario == funcionarioSuperior.idFuncionario && funcionarioSuperior.idGestorEquipe == this.funcionario.idFuncionario){

//           if(funcionario.idFuncionario != this.funcionario.idFuncionario){

//             this.funcionariosEquipeGestorList.push(funcionario)
//           }
//         }

//       })

//     })

//     if(this.funcionariosEquipeGestorList.length > 0){

//       this.funcionariosEquipeGestorList.sort((a, b) => a.nome.localeCompare(b.nome))

//       this.funcionariosEquipeGestorList.forEach(funcionario => {
//         this.cards.push(new CardEquipe({
//             nome: funcionario.nome,
//             cargo: funcionario.cargo,
//             departamento: funcionario.departamento,
//             foto: funcionario.foto
//         }))
//       })

//     }

//   }

}