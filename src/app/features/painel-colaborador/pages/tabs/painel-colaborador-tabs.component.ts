import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";

const painel_colaborador_tab = {
  EQUIPE: 0,
  PONTO: 1,
  REMUNERACAO: 2,
  FERIAS: 3,
  DOCUMENTOS: 4,
  MURAL_CORPORATIVO: 5,
  AVALIACOES: 6
}

@Component({
  selector: 'painel-colaborador-tabs',
  templateUrl: './painel-colaborador-tabs.component.html',
  styleUrls: ['./painel-colaborador-tabs.component.css'],
})
export class PainelColaboradorTabsComponent implements OnInit {
  
  tabIndex : number = painel_colaborador_tab.EQUIPE
  // mensagemExpandirPai: Mensagem = new Mensagem()
//   @Input() mensagemExpandirPai: Mensagem = new Mensagem()
//   @Output() mensagemExpandirEnviadaAvo = new EventEmitter<Mensagem>();

  ngOnInit(): void {

    // console.log('mensagemExpandirPai',this.mensagemExpandirPai);

    // if(Utils.isNotNull(this.mensagemExpandirPai.tabPai)){

    //   if(this.mensagemExpandirPai.tabPai == painel_colaborador_tab.PONTO)
    //     this.tabIndex = painel_colaborador_tab.PONTO
    // // }
        
    
  }
  
//   exibirTab(index: number) : boolean {

//     if (this.tabIndex == index)
//       return true

//     return false
//   }

//   alterarTab(tabChangeEvent: MatTabChangeEvent) : void {

//     this.tabIndex = tabChangeEvent.index
//   }

//   receberMensagemExpandirPai(mensagemExpandirFilho: Mensagem) {
//     this.mensagemExpandirPai = mensagemExpandirFilho;

//     console.log('pai', this.mensagemExpandirPai);
     
//     this.mensagemExpandirEnviadaAvo.emit(this.mensagemExpandirPai) 
//   }
}