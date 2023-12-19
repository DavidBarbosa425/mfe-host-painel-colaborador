import { Component, Injector } from '@angular/core';
import { DatePipe, Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoApp } from '../../../../core/sessao-app/sessao.model';
import { SessaoAppService } from '../../../../core/sessao-app/sessao-app.service';
import { AlertComponent } from '../../../template/alert/alert.component';
import { FeaturesHelpers } from '../../../../core/services/feature.service';


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
    templateUrl: './base.component.html',
  })

export class BaseComponent{

  protected media$: Observable<MediaChange[]>;
  protected currentMediaSize: string
  protected helpers : FeaturesHelpers = new FeaturesHelpers()
  public sessaoApp : SessaoApp = new SessaoApp()

  constructor(
    protected http : HttpClient,
    // protected location : Location,
    // protected route: ActivatedRoute,
    // protected router : Router,
    // protected mediaObserver: MediaObserver,
    // public _bottomSheet: MatBottomSheet,
    // public _snackBar: MatSnackBar,
    // public dialog: MatDialog,
    // public injector:Injector,
    // public datepipe: DatePipe
    ){

      // this.media$ = mediaObserver.asObservable()

      this.sessaoApp = SessaoAppService.getSessao()

      // this.media$.subscribe( (mediaChanges : MediaChange[]) => {
      //   this.currentMediaSize = this.getCurrentMediaSize(mediaChanges)
      // })

      this.helpers = new FeaturesHelpers()
  }

  protected back(): void {
    // this.location.back()
  }

  private getCurrentMediaSize(mediaChanges : MediaChange[]) : string{
    if(mediaChanges.length > 0){
      let mediaChangePriority : MediaChange = mediaChanges.shift()

      return mediaChangePriority.mqAlias
    }

    return "default"
  }

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

  // public openSuccessSnackBar(msg : string) : void {
  //   this._snackBar.open(msg, 'Fechar',{
  //     duration: 5000,
  //     horizontalPosition: "end",
  //     verticalPosition: "top",
  //     panelClass: ['snack-success']
  //   });
  // }

  // public openWarningSnackBar(error) {
  //   this._snackBar.openFromComponent(AlertComponent, {
  //     data: error,
  //     duration: 5000,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     panelClass: ['snack-warning']
  //   });
  // }

  // public openWarningSnackBarNoLimitOfTime(error) {
  //   this._snackBar.openFromComponent(AlertComponent, {
  //     data: error,
  //     duration: 0,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     panelClass: ['snack-warning']
  //   });
  // }

  // public openErrorSnackBar(error) {
  //   this._snackBar.open(error.mensagemUsuario, 'Fechar', {
  //     duration: 5000,
  //     horizontalPosition: "start",
  //     verticalPosition: "top",
  //     panelClass: ['snack-error']
  //   });
  // }

  // public openCatchError(error) {

  //   if (error.status == 400) {
  //     this.openWarningSnackBar(error.error)
  //   }
  //   else {
  //     this.openErrorSnackBar(error.mensagemUsuario)
  //   }
  // }

}
