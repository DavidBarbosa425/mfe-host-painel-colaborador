// import { DatePipe, Location } from '@angular/common'
// import { Component, HostListener, Inject, Injector, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MediaObserver } from '@angular/flex-layout';
// import { HttpClient } from '@angular/common/http';
// import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { BaseModel } from '../../models/baseModel';
// import { BaseComponent } from '../base-page/base.component';
// import { MatBottomSheet } from '@angular/material/bottom-sheet';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Utils } from '../../../services/utils.service';
// import { AuthService } from '../../../../core/auth/auth.service';
// import { MatTableDataSource } from '@angular/material/table';

// export class AgrupamentoFormulario extends BaseModel {

//   id: string = ""
//   enum: any = null
//   formGroup: FormGroup = null
//   formulario: any[] = []

//   constructor(obj: AgrupamentoFormularioParam = null) {
//     super()
//     this.setProperties(this, obj)
//   }
// }

// export class AgrupamentoFormularioParam {

//   id?: string
//   enum?: any
//   formGroup: FormGroup
//   formulario: any[]
// }

// export class ListRegras extends BaseModel {

//   campo: string = ""
//   formGroup: FormGroup = null
//   formulario: any = null

//   enable: boolean = true
//   required: boolean = true
//   clear_field: boolean = false

//   constructor(obj: ListRegrasParam = null) {
//     super()
//     this.setProperties(this, obj)
//   }
// }

// export class ListRegrasParam {

//   campo?: string
//   formGroup?: FormGroup
//   formulario?: any

//   enable?: boolean
//   required?: boolean
//   clear_field?: boolean
// }

// @Component({
//   templateUrl: 'base-form.component.html',
// })
// export class BaseFormComponent extends BaseComponent {

//   list: any[] = []
//   @Input() clear_form: boolean = false
//   @Input() entity_edit: any = null
//   entity_del: any = null

//   tituloForm: string = ""
//   showProgressLista: boolean = false
//   dataList: any[] = []
//   existeRegistro: boolean = false

//   $subSessao: any

//   actionPage: string = ""
// //   actionPage: string = ActionEnum.INSERT

//   showForm: boolean = false
//   mainFormGroup: FormGroup

//   innerWidth: number
//   widthMobile: number = 991

//   loading_complete: boolean = false

//   constructor(protected formBuilder: FormBuilder,
//     protected override http: HttpClient,
//     protected override location: Location,
//     protected override route: ActivatedRoute,
//     protected override router: Router,
//     protected override mediaObserver: MediaObserver,
//     public override _bottomSheet: MatBottomSheet,
//     public override _snackBar: MatSnackBar,
//     public override dialog: MatDialog,
//     public override injector: Injector,
//     public override datepipe: DatePipe) {
//     super(http, location, route, router, mediaObserver, _bottomSheet, _snackBar, dialog, injector, datepipe)

//     this.innerWidth = window.innerWidth
//   }

//   @HostListener('window:resize', ['$event'])
//   onResize(event) {
//     this.innerWidth = window.innerWidth;
//   }

//   isMobile(): boolean {

//     if (this.innerWidth <= this.widthMobile)
//       return true

//     return false
//   }

//   createFormGroup(formularioConfig, formGroup: FormGroup = null, masktouch: boolean = false): FormGroup {

//     let campos = {}

//     formularioConfig.forEach(item => {
//       campos = this.createFormItem(item, campos)
//     })

//     if (formGroup) {
//       formGroup = this.formBuilder.group(campos)
//     }
//     else {
//       this.mainFormGroup = this.formBuilder.group(campos)
//       formGroup = this.mainFormGroup
//     }

//     this.setInputEvents(formularioConfig, formGroup)

//     if (masktouch) {
//       this.setTouchFields(formGroup)
//     }

//     // this.setTouchFields(formGroup)

//     return formGroup
//   }

//   private createFormItem(item, campos = null) {

//     let camposInput = campos ? campos : {}

//     if (Utils.isNotNull(item.id)) {

//       camposInput[item.id] = new FormControl(
//         {
//           value: item.value,
//           disabled: (item.disable ? item.disable : false)
//         },
//         (item.validators ? item.validators : [])
//       )
//     }

//     return camposInput
//   }

//   private isFormularioOrderItens(formularioConfig: any[]): boolean {

//     let is_order: boolean = false

//     for (let index = 0; index < formularioConfig.length; index++) {

//       const element = formularioConfig[index]

//       if (element.order && element.order >= 0) {
//         is_order = true
//         break
//       }
//     }

//     return is_order
//   }

//   getFormularioOrder(formularioConfig: any[]): any[] {

//     if (this.isFormularioOrderItens(formularioConfig))
//       return formularioConfig.sort((a, b) => (a.order < b.order ? -1 : 1))

//     return formularioConfig
//   }

//   public setTouchFields(formGroup: FormGroup) {

//     Object.keys(formGroup.controls).forEach(field => {
//       const control = formGroup.get(field);
//       control.markAsTouched({ onlySelf: true });
//     })
//   }

//   setInputEvents(formularioConfig: any[], formGroup: FormGroup) {

//     formularioConfig.forEach(itemForm => {
//       this.setInputEventsItem(itemForm, formGroup)
//     })
//   }

//   private setInputEventsItem(itemForm, formGroup: FormGroup = null) {

//     if (itemForm.onChanges) {
//       if (!formGroup) {

//         this.mainFormGroup.get(itemForm.id).valueChanges.subscribe(selectedValue => {
//           setTimeout(() => {
//             itemForm.onChanges(selectedValue)
//           }, 500)
//         })
//       } else if (formGroup) {

//         formGroup.get(itemForm.id).valueChanges.subscribe(selectedValue => {
//           setTimeout(() => {
//             itemForm.onChanges(selectedValue)
//           }, 500)
//         })
//       }
//     }
//   }

//   checkExecInputEvent(selectedValue: any, inputEnum: any = null, entity: any = null) {
//     if (Utils.isNull(selectedValue)
//       ||
//       (entity && inputEnum && (selectedValue == entity[inputEnum.id]))
//     )
//       return false

//     return true
//   }

//   incluirCssAllInputs(formularioList: any[], cssClass: string[]) {
//     formularioList.forEach( itemAlteracao => {
//       cssClass.forEach(css => {
//         itemAlteracao.cssClass.push(css)
//       })
//     })
//   }

//   removerCssAllInputs(formularioList: any[], cssClass: string[]) {
//     formularioList.forEach( itemAlteracao => {
//       cssClass.forEach(css => {
//         itemAlteracao.cssClass.pop(css)
//       })
//     })
//   }

//   disableAllInputs(formularioList: any[], exceptions : any[] = []) {
//     formularioList = formularioList.map(formMap => {
//       if(exceptions.indexOf(formMap.id) < 0)
//         formMap.disabled = true

//       return formMap
//     })
//   }
//   enableAllInputs(formularioList: any[], exceptions : any[] = []) {
//     formularioList = formularioList.map(formMap => {
//       if(exceptions.indexOf(formMap.id) < 0)
//         formMap.disabled = false

//       return formMap
//     })
//   }

//   setDataUpdateForm(formularioList: any[], entityUpdate: any = {}, formGroup: FormGroup = null) {

//     if (formGroup == null)
//       formGroup = this.mainFormGroup

//     formularioList.forEach((itemFormulario) => {

//       let entityElement = entityUpdate[itemFormulario.id]

//       if (Utils.isNotNull(entityElement)) {
//         itemFormulario.value = entityElement
//         if (formGroup && Object.keys(formGroup.value).findIndex(formKey => formKey == itemFormulario.id) > -1)
//           formGroup.controls[itemFormulario.id].setValue(entityElement)
//       }

//       if (itemFormulario instanceof InputSelect) {
//         Object.keys(entityUpdate).forEach(itemEntity => {
//           let elementEntity = entityUpdate[itemEntity]

//           if (Utils.isNotNull(elementEntity) && typeof elementEntity == "object") {
//             if (itemEntity == itemFormulario.entityName) {
//               let valueProperty = elementEntity[itemFormulario.optionId]
//               if (Utils.isNotNull(valueProperty) && (Number.isInteger(valueProperty) && valueProperty > 0) || !Number.isInteger(valueProperty)) {
//                 itemFormulario.value = valueProperty

//                 if (formGroup && Object.keys(formGroup.value).findIndex(formKey => formKey == itemFormulario.id) > -1)
//                   formGroup.controls[itemFormulario.id].setValue(entityUpdate[itemFormulario.id])
//               }
//             } else {
//               Object.keys(elementEntity).forEach(itemEntityChild => {
//                 let elementEntityChild = elementEntity[itemEntityChild]
//                 if (Utils.isNotNull(elementEntityChild) && typeof elementEntityChild == "object") {
//                   if (itemEntityChild == itemFormulario.entityName) {
//                     let valueProperty = elementEntityChild[itemFormulario.optionId]
//                     if (Utils.isNotNull(valueProperty) && (Number.isInteger(valueProperty) && valueProperty > 0) || !Number.isInteger(valueProperty)) {
//                       itemFormulario.value = valueProperty

//                       if (formGroup && Object.keys(formGroup.value).findIndex(formKey => formKey == itemFormulario.id) > -1)
//                         formGroup.controls[itemFormulario.id].setValue(entityUpdate[itemFormulario.id])

//                     }
//                   }
//                 }
//               })
//             }
//           }
//         })


//       }
//     })
//   }

//   findInput(formularioList: any[], id: string): any {
//     return formularioList.find((itemFormulario) => itemFormulario.id == id)
//   }

//   setComboContent(formularioList: any[], id: string, content: any[]) {

//     const itemForm = formularioList.find((itemFormulario) => itemFormulario.id == id)

//     if (itemForm) {
//       itemForm.content = content
//     }
//   }

//   resetForm(formularioList: any[], formGroup: FormGroup = null): void {
//     if (!formGroup)
//       formGroup = this.mainFormGroup

//     formGroup.reset()

//     formularioList.forEach(itemForm => {
//       itemForm.value = itemForm.initialValue
//     })
//   }

//   setValue(formularioList: any[], inputName: string, value: any, formGroup: FormGroup = null): void {

//     let inputForm = formularioList.find(formFind => formFind.id == inputName)

//     if (inputForm)
//       inputForm.value = value

//     if (formGroup && Object.keys(formGroup.value).findIndex(formKey => formKey == inputName) > -1)
//       formGroup.controls[inputName].setValue(value)
//   }

//   removeInput(formularioList: any[], inputName: string, formGroup: FormGroup = null): void {

//     const indexInput = formularioList.findIndex(itemForm => itemForm.id == inputName)

//     if (indexInput > -1) {
//       formularioList.splice(indexInput, 1)

//       if (!formGroup) {
//         this.mainFormGroup.removeControl(inputName)
//       }
//       else {
//         formGroup.removeControl(inputName)
//       }
//     }
//   }

//   insertInputIfNotExists(formularioList: any[], input: InputBase, formGroup: FormGroup = null): void {

//     const indexInput = formularioList.findIndex(itemForm => itemForm.id == input.id)
//     if (indexInput < 0) {
//       formularioList.push(input)

//       if (!formGroup) {
//         if (!this.mainFormGroup.get(input.id)) {
//           let campos = this.createFormItem(input)
//           this.mainFormGroup.addControl(input.id, campos[input.id])
//           this.setInputEventsItem(input)
//         }
//       } else if (formGroup) {
//         if (!formGroup.get(input.id)) {
//           let campos = this.createFormItem(input)
//           formGroup.addControl(input.id, campos[input.id])
//           this.setInputEventsItem(input, formGroup)
//         }
//       }
//     }

//   }

//   insertInput(formularioConfig: any[], input: InputBase | ButtonCoreModel, formGroup: FormGroup = null): void {

//     if (!formGroup)
//       formGroup = this.mainFormGroup

//     let inputbase = (input instanceof InputBase)

//     if (inputbase) {

//       const indexInput = formularioConfig.findIndex(itemForm => itemForm.id == input.id)

//       if (indexInput == -1) {
//         this.insertInputForm(formularioConfig, input, formGroup)
//       }
//     }

//     if (!inputbase) {

//       const indexInput = formularioConfig.findIndex(itemForm => itemForm.id_button == input.id_button)

//       if (indexInput == -1) {
//         this.insertInputForm(formularioConfig, input, formGroup)
//       }
//     }
//   }

//   private insertInputForm(formularioConfig: any[], input: InputBase | ButtonCoreModel, formGroup: FormGroup = null): void {

//     formularioConfig.push(input)
//     formularioConfig = this.getFormularioOrder(formularioConfig)

//     if (!formGroup.get(input.id) && input.id != "") {
//       let campos = this.createFormItem(input)
//       formGroup.addControl(input.id, campos[input.id])
//       this.setInputEventsItem(input, formGroup)
//     }
//   }

//   disableInput(formularioList: any[], inputName: string): void {

//     const inputFind = formularioList.find(itemForm => itemForm.id == inputName)
//     if (inputFind)
//       inputFind.disabled = true

//   }

//   activeInput(formularioList: any[], inputName: string): void {

//     const inputFind = formularioList.find(itemForm => itemForm.id == inputName)
//     if (inputFind)
//       inputFind.disabled = false

//   }

//   executarRegras(pRegras: ListRegras[]): void {

//     pRegras.forEach(itemRegra => {

//       if (itemRegra.enable)
//         this.activeInput(itemRegra.formulario, itemRegra.campo)
//       else
//         this.disableInput(itemRegra.formulario, itemRegra.campo)

//       let itemFormulario: any = itemRegra.formGroup.get(itemRegra.campo)
//       if (itemRegra.clear_field &&
//           itemFormulario &&
//           Utils.isNotEmpty(itemFormulario.value))
//         itemRegra.formGroup.controls[itemRegra.campo].setValue(null)

//       if (itemRegra.required)
//         this.insertValidatorRequiredInput(itemRegra.formGroup, itemRegra.formulario, itemRegra.campo)
//       else
//         this.removeValidatorRequiredInput(itemRegra.formGroup, itemRegra.formulario, itemRegra.campo)

//     })
//   }

//   insertValidatorRequiredInput(formGroup: FormGroup, formularioLista: any = null, inputName: string = ""): void {

//     let itemForm = formularioLista.find(item => item.id == inputName)

//     if (itemForm) {
//       itemForm.validators = [Validators.required]

//       if (formGroup && Object.keys(formGroup.value).findIndex(formKey => formKey == itemForm.id) > -1) {

//         formGroup.controls[itemForm.id].setValidators([Validators.required])
//         if (Utils.isNull(formGroup.controls[itemForm.id].value))
//           formGroup.controls[itemForm.id].setErrors({ 'invalid': true })
//       }
//     }
//   }

//   insertValidatorRequiredForm(formGroup: FormGroup, formularioLista: any = null): void {

//     formularioLista.forEach(itemForm => {

//       this.insertValidatorRequiredInput(formGroup, formularioLista, itemForm.id)
//       this.activeInput(formularioLista, itemForm.id)
//     })
//   }

//   removeValidatorRequiredInput(formGroup: FormGroup, formularioLista: any = null, inputName: string = ""): void {

//     let itemForm = formularioLista.find(item => item.id == inputName)

//     if (itemForm) {
//       itemForm.validators = []

//       if (formGroup && Object.keys(formGroup.value).findIndex(formKey => formKey == itemForm.id) > -1) {

//         formGroup.controls[itemForm.id].clearValidators()
//         formGroup.controls[itemForm.id].setErrors(null)
//       }
//     }
//   }

//   removeValidatorRequiredForm(formGroup: FormGroup, formularioLista: any = null): void {

//     formularioLista.forEach(itemForm => {

//       this.removeValidatorRequiredInput(formGroup, formularioLista, itemForm.id)
//     })
//   }

//   async setDataUpdateEntity(entity: any, formGroup: FormGroup) {

//     let itensobj = Object.keys(entity) as Array<any>;

//     itensobj.forEach((prop) => {

//       if (formGroup.controls[prop] &&
//         Utils.isNotNull(formGroup.controls[prop].value))
//         entity[prop] = formGroup.controls[prop].value
//     })
//   }

//   async setMergeEntity(entitymerge: any, entity: any) {

//     Object.keys(entity).forEach((prop) => {

//       if (Utils.isNotNull(entity[prop])) {

//         if (entitymerge[prop])
//           entitymerge[prop] = entity[prop]
//       }
//     })
//   }

//   public excluirRegistro(options: DialogExcluirOption = new DialogExcluirOption()): Promise<boolean> {

//     return new Promise((resolve, reject) => {

//       const dialogRef = this.dialog.open(DialogExcluirComponent, {
//         width: '400px',
//         disableClose: true,
//         data: options
//       });

//       dialogRef.afterClosed().subscribe(async result => {
//         return resolve(result)
//       })
//     })
//   }
  

//   public isGerarRelatorioTodasEmpresasDoGrupo(options: DialogRelatorioFuncionariosOption = new DialogRelatorioFuncionariosOption()): Promise<boolean> {

//     return new Promise((resolve, reject) => {

//       const dialogRef = this.dialog.open(DialogRelatorioFuncionariosComponent, {
//         width: '400px',
//         disableClose: true,
//         data: options
//       });

//       dialogRef.afterClosed().subscribe(async result => {
//         return resolve(result)
//       })
//     })
//   }

//   hasRequiredField(abstractControl: AbstractControl) {
//     if (abstractControl.validator) {
//       const validator = abstractControl.validator({} as AbstractControl);
//       if (validator && validator.required) {
//         return true;
//       }
//     }
//     return false;
//   }

//   public getDataFormatada(data: Date, format: any = ''): string {

//     if (format == '')
//       format = 'dd/MM/yyyy'

//     let dp = new DatePipe(navigator.language);
//     let dtr = dp.transform(data, format);

//     return dtr;
//   }

//   public getHoraAtual(): string {

//     let hour = new Date().getHours().toString()
//     let min = new Date().getMinutes().toString()
//     let sec = new Date().getSeconds().toString()

//     hour = this.Right("00" + hour, 2)
//     min = this.Right("00" + min, 2)
//     sec = this.Right("00" + sec, 2)

//     return hour + ":" + min + ":" + sec;
//   }

//   public getDataHoraAtual(): string {

//     let hour = new Date().getHours().toString()
//     let min = new Date().getMinutes().toString()
//     let sec = new Date().getSeconds().toString()

//     hour = this.Right("00" + hour, 2)
//     min = this.Right("00" + min, 2)
//     sec = this.Right("00" + sec, 2)

//     return hour + ":" + min + ":" + sec;
//   }

//   public getDate3MonthLater(): Date {

//     var d = new Date();
//     d.setMonth(d.getMonth() - 3);

//     return d
//   }

//   public Left(str, n): string {
//     if (n <= 0)
//       return "";
//     else if (n > String(str).length)
//       return str;
//     else
//       return String(str).substring(0, n);
//   }

//   public Right(str, n): string {
//     if (n <= 0)
//       return "";
//     else if (n > String(str).length)
//       return str;
//     else {
//       var iLen = String(str).length;
//       return String(str).substring(iLen, iLen - n);
//     }
//   }

//   public openModal(dialogModel: DialogModel): Promise<any> {

//     return new Promise((resolve, reject) => {

//       this.dialog.open(dialogModel.component, {
//         width: dialogModel.width,
//         maxWidth: dialogModel.maxWidth,
//         data: dialogModel.data,
//       }).afterClosed().subscribe((result) => {
//         return resolve(result)
//       })
//     })
//   }

//   //NÃO USAR OBSOLETO, VAMOS MUDAR TODOS POSTERIORMENTE, USAR O openModal
//   async abrirModal(component: any, dataselect: any = null): Promise<any> {

//     let dialog = new DialogModel({
//       component: component,
//       data: (dataselect != null ? { 'selected': dataselect } : null)
//     })

//     await this.openModal(dialog)

//     // return new Promise((resolve, reject) => {

//     //   if (dataselect != null) {
//     //     this.dialog.open(component, {
//     //       maxWidth: '95vw',
//     //       data: { 'selected': dataselect },
//     //     }).afterClosed().subscribe((result) => {
//     //       return resolve(result)
//     //     })
//     //   }
//     //   else {
//     //     this.dialog.open(component, {
//     //       maxWidth: '95vw'
//     //     }).afterClosed().subscribe((result) => {
//     //       return resolve(result)
//     //     })
//     //   }

//     // })
//   }

//   clearForm(): void {
//     this.mainFormGroup.reset()
//   }

//   goRouter(pRouter: string) {
//     this.router.navigateByUrl('/' + pRouter);
//   }

//   clear_list_props(table: TableConfig = null): void {

//     this.list = null
//     this.entity_edit = null
//     this.entity_del = null

//     if (table != null) {
//       table.data_source = null
//       table.data_source_empty = true
//     }
//   }

//     validarAlteracaoValorCampo(valorNovo: any, valorAtual: any): boolean {

//       if(Utils.isNull(valorNovo))
//         return false

//       if(valorNovo != valorAtual)
//         return true

//       return false
//     }

//   aplicar_table_datasource(list: any, table: TableConfig): void {

//     table.data_source = new MatTableDataSource<any>(list);
//     this.list = list

//     table.data_source_empty = list == [] || list == null || list.length == 0 ? true : false
//   }
// }

// @Component({
//   templateUrl: 'base-form.component.html',
// })
// export class BaseDialogFormComponent extends BaseFormComponent {

//   data: any = {}
//   dialogRef: MatDialogRef<any> = null

//   constructor(formBuilder: FormBuilder,
//     http: HttpClient,
//     location: Location,
//     route: ActivatedRoute,
//     router: Router,
//     mediaObserver: MediaObserver,
//     _bottomSheet: MatBottomSheet,
//     _snackBar: MatSnackBar,
//     dialog: MatDialog,
//     _dialogRef: MatDialogRef<any>,
//     @Inject(MAT_DIALOG_DATA) public _data: any,
//     public override injector: Injector,
//     public override datepipe: DatePipe
//   ) {
//     super(formBuilder, http, location, route, router, mediaObserver, _bottomSheet, _snackBar, dialog, injector, datepipe)
//     this.data = Utils.newInstance(_data)
//     this.dialogRef = _dialogRef
//   }
// }

// @Component({
//   templateUrl: 'base-form.component.html',
// })
// export class BaseWithAuthComponent extends BaseFormComponent {

//   authService: AuthService
//   // snackBarRef: MatSnackBarRef<any> = null

//   constructor(formBuilder: FormBuilder,
//     http: HttpClient,
//     location: Location,
//     route: ActivatedRoute,
//     router: Router,
//     mediaObserver: MediaObserver,
//     _bottomSheet: MatBottomSheet,
//     _snackBar: MatSnackBar,
//     dialog: MatDialog,
//     _authService: AuthService,
//     injector: Injector,
//     public override datepipe: DatePipe
//   ) {
//     super(formBuilder, http, location, route, router, mediaObserver, _bottomSheet, _snackBar, dialog, injector, datepipe)
//     this.authService = _authService
//     // this.snackBarRef = _snackBarRef
//   }
// }
