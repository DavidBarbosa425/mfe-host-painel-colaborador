import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, OnDestroy } from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";


export interface BreakPointGrid{
  size : string
  qtde: number
}

export const BreakPointSizeEnum = {
  XL : "xl",
  LG : "lg",
  MD : "md",
  SM : "sm",
  XS : "xs",
}

@Component({
  template : ""
})
export class BasePageComponent implements OnDestroy{

  public media$: Observable<MediaChange[]>;
  public currentMediaSize: string = ""
  public mainSubscribe: any = null;
//   public sessaoApp : SessaoApp = new SessaoApp()
//   public sessaoAppService : SessaoAppService = new SessaoAppService()
//   tela : TelaGRID = new TelaGRID({descricao:"Base"})

  mediaSizeChanged : EventEmitter<void> = new EventEmitter<void>()

  $sessaoSubscribe = null

  constructor(
    protected http : HttpClient,
    protected location : Location,
    protected route: ActivatedRoute,
    protected router : Router,
    protected mediaObserver: MediaObserver,
    // public _bottomSheet: MatBottomSheet,
    // public _snackBar: MatSnackBar,
    // protected dialog: MatDialog,
    // public injector:Injector
    ){

      this.media$ = mediaObserver.asObservable()

      this.media$.subscribe( (mediaChanges : MediaChange[]) => {
        let currentMediaSize = this.getCurrentMediaSize(mediaChanges)

        if(currentMediaSize != this.currentMediaSize){
          this.currentMediaSize = currentMediaSize
          this.mediaSizeChanged.emit()
        }

      })

    //   this.$sessaoSubscribe = SessaoAppService.sessaoAppChanged.subscribe( () => {
    //     this.sessaoApp = SessaoAppService.getSessao()
    //   })

    //   this.sessaoApp = SessaoAppService.getSessao();
  }

  ngOnDestroy(): void {
    // if(this.$sessaoSubscribe)
    //   this.$sessaoSubscribe.unsubscribe()
  }


  //#region Metodos

//   injectService(serviceClass : any){
//     return serviceClass["getInstance"](this.http,this._snackBar)
//   }

//   public openSuccessSnackBar(msg : string) : void {
//     this._snackBar.open(msg, 'Fechar',{
//       duration: 5000,
//       horizontalPosition: "end",
//       verticalPosition: "top",
//       panelClass: ['snack-success']
//     });
//   }

//   public openErrorSnackBar(error : CustomError) {
//     this._snackBar.open(error.mensagemUsuario, 'Fechar', {
//       duration: 5000,
//       horizontalPosition: "start",
//       verticalPosition: "top",
//       panelClass: ['snack-error']
//     });
//   }

//   public openBasicSnackBar(text : string) {
//     this._snackBar.open(text, 'Fechar', {
//       horizontalPosition: "start",
//       verticalPosition: "top",
//       panelClass: ['snack-basic']
//     });
//   }

//   public closeBasicSnackBar() {
//     this._snackBar.dismiss()
//   }

//   public openWarningSnackBar(mensagem : string,time = 5000) {
//     this._snackBar.open(mensagem, 'Fechar', {
//       duration: time,
//       horizontalPosition: "start",
//       verticalPosition: "top",
//       panelClass: ['snack-warning']
//     });
//   }

  private getCurrentMediaSize(mediaChanges : MediaChange[]) : string{
    if(mediaChanges.length > 0){
      let mediaChangePriority : MediaChange = mediaChanges.shift()

      return mediaChangePriority.mqAlias
    }

    return "default"
  }

  public back(): void {
    // this.location.back()
  }

  //#endregion

  //#region SystemGrid

  public grid(breakpointDefault:number = 12, gridOptions : string[] = null) : number {
    if(gridOptions){
        const findBreakpointGrid : string = gridOptions.find( gridFilter => {
            const optionSplit = gridFilter.split("-")
            if(optionSplit.length == 2){
                const size = optionSplit[0]

                const multiplesSizeSplit = size.split("|")
                if(multiplesSizeSplit.length > 0){
                  let sizeFinde = multiplesSizeSplit.findIndex( sizeAliasFilter => sizeAliasFilter == this.currentMediaSize)

                  return (sizeFinde > -1)
                }else
                  return (size == this.currentMediaSize)
            }
            return false
        })
        if(findBreakpointGrid)
            return parseInt(findBreakpointGrid.split("-")[1])
    }

    return breakpointDefault
  }

  public gridPx(pxDefault:number = 100, pxOptions : string[] = null) : string {
    if(pxOptions){
        const findPxGrid : string = pxOptions.find( gridFilter => {
            const optionSplit = gridFilter.split("-")
            if(optionSplit.length == 2){
                const size = optionSplit[0]

                const multiplesSizeSplit = size.split("|")
                if(multiplesSizeSplit.length > 0){
                  let sizeFinde = multiplesSizeSplit.findIndex( sizeAliasFilter => sizeAliasFilter == this.currentMediaSize)

                  return (sizeFinde > -1)
                }else
                  return (size == this.currentMediaSize)
            }
            return false
        })
        if(findPxGrid)
            return `${findPxGrid.split("-")[1]}px`
    }

    return `${pxDefault}px`
  }

  public showSizes(gridOptions : string[] = []) : boolean {

    let findSize = gridOptions.findIndex( itemOption => itemOption == this.currentMediaSize)
    if(findSize > -1)
      return true

    return false
  }

  waitForMediaSize() : Promise<void>{
    return new Promise( (resolve,reject) => {

      if(this.currentMediaSize != null)
        return resolve()

      let subscribeMediaSize : any = null
      subscribeMediaSize = this.mediaSizeChanged.subscribe( () => {
        resolve()

        subscribeMediaSize.unsubscribe()
      })
    })
  }

  isMobile() : boolean {
    if(["xs","sm"].indexOf(this.currentMediaSize) > -1){
      return true
    }

    return false
  }

//   getCssClassSinal(horas,itemCompetencia : CompetenciaGRID = null) : string[]{
//     const cssClass : string[] = []

//     if(Utils.existsOnString(horas,"-")){
//       cssClass.push("negativo")
//     }else if(horas == "00:00"){
//       cssClass.push("neutro")
//     }else{
//       cssClass.push("positivo")
//     }

//     if(itemCompetencia){
//       if(itemCompetencia.saldoMes.idStatusCompetencia == FechamentoStatusEnum.EM_ANDAMENTO){
//         cssClass.push("em-andamento")
//       }if(itemCompetencia.saldoMes.idStatusCompetencia == FechamentoStatusEnum.APROVADO_RH){
//         cssClass.push("aguardando")
//       }
//     }

//     return cssClass
//   }

}
