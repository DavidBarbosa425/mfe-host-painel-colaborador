import { BaseModel } from "../../../shared/base/models/baseModel"

export const StatusTicketEnum = {
  AGUARDANDO_TERCEIROS : 3,
  PENDENTE_CLIENTE : 4,
  RESOLVIDO : 5,
  ENCERRADO : 7,
  ARQUIVADO : 9
}

export class TicketGRID extends BaseModel{

  id:number = 0
  GUID: string = ""
  assunto: string = ""
  texto: String = ""

  avaliacao: number = 0
  qtdeInteracoes: number = 0
  qtdeInteracoesNaoVisualizadas: number = 0
  qtdeArquivos: number = 0
  isInterno: boolean = false
  isFromEmail: boolean = null
  emailSolicitacao : string = ""

//   area: AreaGRID = new AreaGRID()
//   areaRequisicao: AreaGRID = new AreaGRID()
//   categoria: CategoriaTicketGRID = new CategoriaTicketGRID()
//   subCategoria: SubCategoriaTicketGRID = new SubCategoriaTicketGRID()
//   cliente: EmpresaBaseGRID = new EmpresaBaseGRID()
//   solicitante : UsuarioGRID = new UsuarioGRID()
//   analista: UsuarioBackofficeGRID = new UsuarioBackofficeGRID()
//   gerenteRelacionamento: UsuarioBackofficeGRID = new UsuarioBackofficeGRID()
  status: StatusTicketGRID = new StatusTicketGRID()
//   ambiente : AmbienteGRID = new AmbienteGRID()

//   lInteracao : TicketInteracaoGRID[] = []
//   InteracaoVisualizacao : TicketInteracaoVisualizacaoGRID[] = []
//   lArquivos: ArquivoTicketGRID[] = []

  dataInicioContagem : Date = new Date()
  dataFimContagem : Date = new Date()
  slaTimestampAtual : number = 0

  isParticipante : boolean = false

  //SLA
//   slaPeriodoTipo : SlaPeriodoTipoGRID = new SlaPeriodoTipoGRID()
  sla : number = 0

  dataCriacao :  Date = null
  calcularSLA: false  = false
  dataObjetivo :  Date = null
  dataProximaCobrancaProposta :  Date = null
  slaDataPrimeiroAtendimento : Date = null
  dataPrimeiroAtendimento : Date = null
  timestampTotal : number = 0

  dataUltimaMovimentacao :  Date = null
  dataInicioEtapaSlaAtual :  Date = null
  dataFimEtapaSlaAtual :  Date = null

  timestampCorridoEtapaAtual : number = 0
  timestampCorridoTotal : number = 0
  slaTimestampRestante : number = 0
  agrupamentoData : string = ""

  //SUBTICKET
  idTicketPai : number = 0
  isSubTicket : boolean = false
  hasSubTicket : boolean = false

  //AGRUPAMENTO
  quantidade : number = 0
  agrupamentoItem : string = ""

  //runtime
//   slaContent : SlaContent = new SlaContent()

  //flags
  ativo: boolean = true
  contarSla : boolean = false

  //situação
  dataAlteracaoSituacao : Date = new Date()
//   usuarioAlteracaoSituacao : UsuarioBackofficeGRID = new UsuarioBackofficeGRID()

  //runtime
  qtdeInteracoesNaoVisualizadasUpdt: number = 0
  assuntoSubstr : string = ""
  //prioridade
  idAuxPrioridade : number = 0
  descricaoPrioridade : string = ""

}

export class StatusTicketGRID extends BaseModel{

    id:number = 0
    GUID: string = ""
    nome: string = ""
    // icon: FaModel = new FaModel()
    key: string = ""
    aprovar: boolean = false
    contabilizar: boolean = false
  
    cssClass: string[] = []
    cssClassActive: string[] = []
    favorite : boolean = false
    ordem: number = 999
    prioridadeBackOffice : number = 0
    prioridadeConfirpDigital : number = 0
    idAuxAmbiente : number = 0
    contarSla : boolean = false
    permitirInteracao : boolean = false
    color : string = ""
    definirCriacao : boolean = false
    alteracaoManual : boolean = true
    showDashboard : boolean = true
  
    //runtime
    idTipos : number[] = []
  
    constructor(obj : any = {}){
      super()
      this.setProperties(this,obj)
  
    //   if(obj.iconStyle && obj.iconName){
    //     this.icon = new FaModel({
    //       name:obj.iconName,
    //       style:obj.iconStyle
    //     })
    //   }
    }
  }
  