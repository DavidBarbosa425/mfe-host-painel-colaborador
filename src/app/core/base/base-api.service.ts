import { Inject, Injectable } from "@angular/core"
import { appSettings } from "../appSettings"
import { HttpClient, HttpHeaders, HttpXhrBackend } from "@angular/common/http"
import { SessaoAppService } from "../sessao-app/sessao-app.service"
import { SessaoApp } from "../sessao-app/sessao.model"
import { BaseModelEntity } from "../../shared/base/models/baseModel"
import { Alerta, AlertaService, TipoAlerta } from "../services/alert.service"
import { ProgressService } from "../services/progress.service"


@Injectable({
  providedIn: 'root'
})
export class BaseApiService<FormCreate, FormUpdate, FormDelete = null>{

  protected hostApi = appSettings.urlApi
  protected requestURL: string
  protected http: HttpClient

  constructor(@Inject(String)apiFeature: string) {

    this.http = new HttpClient(new HttpXhrBackend({
      build: () => new XMLHttpRequest()
    }))
    this.requestURL = `${this.hostApi}/${apiFeature}`
  }

  public getHttpHeaders(): HttpHeaders {

    const sessaoApp: SessaoApp = SessaoAppService.getSessao()

    if(sessaoApp.validarTokenApi()){
      return new HttpHeaders({
        'Authorization': `${sessaoApp.tokenApi.token_type} ${sessaoApp.tokenApi.access_token}`
      })
    }else{
      throw "Sessão não possui dados validos de acesso a API"
    }

  }

  public GET_FIRST(parameter: any = null, method: string = "GET_FIRST"): Promise<any> {

    return new Promise(async (resolve, reject) => {

      let headers = this.getHttpHeaders()

      await this.http.post<any>(
        `${this.requestURL}/${method}`, parameter, { headers })
        .toPromise()
        .then((responseApi) => {
          const response: any = responseApi

          return resolve(response)
        })
        .catch((error) => {
          AlertaService.catch.emit(error)
          return reject(error)
        })
        .finally(() => {
        })
    })
  }

  public GET(parameter: any = null, method: string = "GET"): Promise<any[]> {

    return new Promise(async (resolve, reject) => {

      let headers = this.getHttpHeaders()

      await this.http.post<any[]>(
        `${this.requestURL}/${method}`, parameter, { headers })
        .toPromise()
        .then((responseApi) => {
          const response: any[] = responseApi

          return resolve(response)
        })
        .catch((error) => {
          AlertaService.catch.emit(error)
          return reject(error)
        })
        .finally(() => {
        })
    })
  }

  public INSERT(parameter: FormCreate = null, method: string = "INSERT", showAlert: boolean = true): Promise<any> {

    let base = new BaseModelEntity(parameter)

    if (base.is_exibir_progress)
      ProgressService.progressChange.emit(true)

    return new Promise(async (resolve, reject) => {

      let headers = this.getHttpHeaders()

      this.http.post(`${this.requestURL}/` + method, parameter, { headers })
        .toPromise()
        .then((result) => {

          if (base.is_exibir_alerta && showAlert)
            AlertaService.alerta.emit(new Alerta({
              tipo: TipoAlerta.SUCCESS,
              mensagem: "Registro incluído com sucesso!"
            }))

          return resolve(result)
        })
        .catch((error) => {

          if (base.is_exibir_alerta)
            AlertaService.catch.emit(error)

          return reject(error)
        })
        .finally(() => {

          if (base.is_exibir_progress)
            ProgressService.progressChange.emit(false)
        })

    })
  }

  public UPDATE(parameter: FormUpdate = null, method: string = "UPDATE"): Promise<any> {

    let base = new BaseModelEntity(parameter)

    if (base.is_exibir_progress)
      ProgressService.progressChange.emit(true)

    return new Promise(async (resolve, reject) => {

      let headers = this.getHttpHeaders()

      this.http.post(`${this.requestURL}/` + method, parameter, { headers })
        .toPromise()
        .then((result) => {

          if (base.is_exibir_alerta)
            AlertaService.alerta.emit(new Alerta({
              tipo: TipoAlerta.SUCCESS,
              mensagem: "Registro alterado com sucesso!"
            }))

          return resolve(result)
        })
        .catch((error) => {

          if (base.is_exibir_alerta)
            AlertaService.catch.emit(error)

          return reject(error)
        })
        .finally(() => {

          if (base.is_exibir_progress)
            ProgressService.progressChange.emit(false)
        })

    })
  }

  public DELETE(parameter: FormDelete = null, method: string = "DELETE", showAlert: boolean = true): Promise<void> {

    let base = new BaseModelEntity(parameter)

    if (base.is_exibir_progress)
      ProgressService.progressChange.emit(true)

    return new Promise(async (resolve, reject) => {

      let headers = this.getHttpHeaders()

      this.http.post(`${this.requestURL}/` + method, parameter, { headers })
        .toPromise()
        .then(() => {

          if (base.is_exibir_alerta && showAlert)
            AlertaService.alerta.emit(new Alerta({
              tipo: TipoAlerta.SUCCESS,
              mensagem: "Registro excluído com sucesso!"
            }))

          return resolve()
        })
        .catch((error) => {

          if (base.is_exibir_alerta)
            AlertaService.catch.emit(error)

          return reject(error)
        })
        .finally(() => {

          if (base.is_exibir_progress)
            ProgressService.progressChange.emit(false)
        })

    })
  }
}
