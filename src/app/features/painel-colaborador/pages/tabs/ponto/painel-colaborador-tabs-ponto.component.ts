import { Component, OnInit, ViewChild } from "@angular/core"

const PontoTelaEnum = {
  MARCACAO: 0,
  EXTRATO: 1,
  APROVACAO: 2

}

export class Mensagem {

  expandir: boolean = null
  tabFilho: number = null
  tabPai: number = null

//   constructor(obj:MensagemParam = null){
//       super()
//       this.setProperties(this,obj)
//     }
}

export class MensagemParam {

  expandir: boolean 
  tabFilho: number 
  tabPai: number 
}
@Component({
  selector: 'painel-colaborador-tabs-ponto',
  templateUrl: './painel-colaborador-tabs-ponto.component.html',
  styleUrls: ['./painel-colaborador-tabs-ponto.component.css']
})



export class PainelColaboradorTabsPontoComponent implements OnInit {

  
//   @ViewChild('frameAngular') frameAngular: ElementRef
//   @Input() mensagemExpandirFilho: Mensagem = new Mensagem()
//   @Output() mensagemExpandirEnviadaPai = new EventEmitter<Mensagem>();

//   selectedTabIndex: number = PontoTelaEnum.EXTRATO
//   funcionariosList: FuncionariosGrid[] = []
//   funcionario: FuncionariosGrid
//   carregando: boolean = true

  async ngOnInit():Promise<void> {

    // this.carregando = true

    // await this.buscaFuncionarios()

    // await this.onTabChange()

    // this.carregando = false

  }

//   async buscaFuncionarios():Promise<void>{

//    this.funcionariosList = await this.helpers.painelColaborador._GET(new FuncionariosFilter({
//       idCliente: this.sessaoApp.idClienteSelecionado,
//     }))

//     this.funcionario = this.funcionariosList.filter(funcionarioBusca => funcionarioBusca.idFuncionarioControleUsuarioSite == this.sessaoApp.usuarioLogado.Id)[0]

//   }

//   async onTabChange(event?: MatTabChangeEvent): Promise<void> {

//     if(Utils.isNotNull(this.mensagemExpandirFilho.tabFilho) && Utils.isNull(event))
//       this.selectedTabIndex = this.mensagemExpandirFilho.tabFilho
//     else
//       this.selectedTabIndex = event?.index != null ? event.index : PontoTelaEnum.EXTRATO 

//     if(this.selectedTabIndex == PontoTelaEnum.MARCACAO){
//       this.setTelaMarcacaoPonto()
//     }
//     else if(this.selectedTabIndex == PontoTelaEnum.EXTRATO){
//       this.setTelaExtratoPonto()
//     }
//     else if(this.selectedTabIndex == PontoTelaEnum.APROVACAO){
//       this.setTelaAprovacaoPonto()
//     }        

//   }

//   setTelaMarcacaoPonto(): void{

//   }

//   setTelaExtratoPonto(): void{

//     let usuarioLogado:UsuarioLogado = new UsuarioLogado()
//     let sessaoAppToIframe:SessaoAppToIframe = new SessaoAppToIframe()
//     usuarioLogado.id = this.funcionario.idFuncionarioControleUsuario
//     sessaoAppToIframe.ambienteSelecionado = AmbienteSelecionadoEnumm.BACKOFFICE
//     sessaoAppToIframe.usuarioLogado = usuarioLogado

//     setTimeout(() => {

//         const iframe = this.frameAngular.nativeElement;
//         iframe.contentWindow.postMessage(sessaoAppToIframe, 'https://rhinterno.confirpdigital.com.br');
//         // iframe.contentWindow.postMessage(sessaoAppToIframe, 'http://localhost:4203/extrato');

//         }, 1000);

//   }

//   setTelaAprovacaoPonto(): void{

//   }

//   expandir():void{

//     this.mensagemExpandirFilho.expandir = !this.mensagemExpandirFilho.expandir
//     this.mensagemExpandirFilho.tabFilho = this.selectedTabIndex
//     this.mensagemExpandirFilho.tabPai = 1

//     this.mensagemExpandirEnviadaPai.emit(this.mensagemExpandirFilho)
//    console.log('filho',this.mensagemExpandirFilho)

//   }

}