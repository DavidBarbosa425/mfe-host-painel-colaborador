import { Component, OnInit } from "@angular/core"

@Component({
  selector: 'painel-colaborador-acesso-rapido',
  templateUrl: './painel-colaborador-acesso-rapido.component.html',
  styleUrls: ['./painel-colaborador-acesso-rapido.component.css'],
  
})
export class PainelColaboradorAcessoRapidoComponent implements OnInit {
  
//   carregando = true
//   funcionariosList: FuncionariosGrid[] = []
//   funcionario: FuncionariosGrid = new FuncionariosGrid()
//   saldoHorasAtual = new SaldoHoras()
//   saldoHorasDia = new SaldoHorasDia()
//   ticketsAtrasados: TicketGRID[] = []
//   ticketsAtrasadosCount = 0
//   ticketsParaHojeCount = 0
//   ticketsParaHoje: TicketGRID[] = []

  async ngOnInit(): Promise<void> {

    // this.carregando = true

    // await this.buscaFuncionarios()

    // await this.setSaldoFuncionario()

    // await this.buscaTicketsFuncionario()

    // await this.setTicketsFuncionario()

    // this.carregando = false

  }

//   async buscaFuncionarios(): Promise<void>{

//     this.funcionariosList = await this.helpers.painelColaborador._GET(new FuncionariosFilter({
//       idCliente: this.sessaoApp.idClienteSelecionado
//     }))

//     this.funcionario = this.funcionariosList
//       .filter(funcionario => funcionario.idFuncionarioControleUsuarioSite == this.sessaoApp.usuarioLogado.Id)[0]

//   }

//   async setSaldoFuncionario(): Promise<void> {
    
//     try{

//       this.saldoHorasAtual = await this.http
//         .post<SaldoHoras>('https://rhinternoapi.confirpdigital.com.br/SaldoHoras/GetSaldoAtualFuncionario',
//         {"idUsuario": this.funcionario.idUsuarioBackoffice}).toPromise()

//       await this.http
//         .post('https://rhinternoapi.confirpdigital.com.br/SaldoHoras/CalcularSaldoHoras' ,
//         {"idUsuario": this.funcionario.idUsuarioBackoffice}).toPromise()

//       this.saldoHorasDia = await this.http
//         .post<SaldoHorasDia>('https://rhinternoapi.confirpdigital.com.br/SaldoHoras/GetMarcacoesDiaAtual' ,
//         {"idUsuario": this.funcionario.idUsuarioBackoffice}).toPromise()
  
//     }
//     catch (error) {
//       console.error('Ocorreu um erro ao chamar a API rhinterno:', error);
//     }
      
//   }

//   async buscaTicketsFuncionario(): Promise<void>{

//     try{

//       let respostaTicketsAtrasados = await this.http
//         .post<any>('https://crmapi.confirpdigital.com/api/Ticket/GetByDinamicScript',
//         {agrupamentoDataId:"atrasados",idAnalista: this.funcionario.idUsuarioBackoffice}).toPromise()
   
//       if(respostaTicketsAtrasados != null)
//         this.ticketsAtrasados = respostaTicketsAtrasados.Result.Response

//       let respostaTicketsParaHoje = await this.http
//         .post<any>('https://crmapi.confirpdigital.com/api/Ticket/GetByDinamicScript',
//         {agrupamentoDataId:"hoje",idAnalista: this.funcionario.idUsuarioBackoffice}).toPromise()
   
//       if(respostaTicketsParaHoje != null)
//         this.ticketsParaHoje = respostaTicketsParaHoje.Result.Response

//     }
//     catch (error) {
//       console.error('Ocorreu um erro ao chamar a API crm:', error);
//     }
   
//   }

//   async setTicketsFuncionario(): Promise<void>{

//     if(this.ticketsAtrasados.length > 0){
//       this.ticketsAtrasadosCount = this.ticketsAtrasados
//         .filter(ticket => 
//           ticket.status.id != StatusTicketEnum.ARQUIVADO
//           && ticket.status.id != StatusTicketEnum.AGUARDANDO_TERCEIROS
//           && ticket.status.id != StatusTicketEnum.ENCERRADO
//           && ticket.status.id != StatusTicketEnum.PENDENTE_CLIENTE
//           && ticket.status.id != StatusTicketEnum.RESOLVIDO).length
//     }

//     if(this.ticketsParaHoje.length > 0){
//       this.ticketsParaHojeCount = this.ticketsParaHoje
//         .filter(ticket => 
//           ticket.status.id != StatusTicketEnum.ARQUIVADO
//           && ticket.status.id != StatusTicketEnum.AGUARDANDO_TERCEIROS
//           && ticket.status.id != StatusTicketEnum.ENCERRADO
//           && ticket.status.id != StatusTicketEnum.PENDENTE_CLIENTE
//           && ticket.status.id != StatusTicketEnum.RESOLVIDO).length
//     }
       
//   }
}