import { EventEmitter } from "@angular/core";

export class BaseHelperService<CreateForm, UpdateForm, DeleteFrom = null> {

  public static changeEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>()
  apiService: any

  constructor(
    _apiService: any
  ) {

    this.apiService = _apiService
  }

  public async _GET(parameter: any = null, method: string = "GET"): Promise<any[]> {

    return new Promise((resolve) => {

      this.apiService.GET(parameter, method)
        .then((content: any[]) => {
          return resolve(content)
        })
    })
  }

  public async _GET_FIRST(parameter: any = null, method: string = "GET_FIRST"): Promise<any> {

    return new Promise((resolve) => {

      this.apiService.GET_FIRST(parameter, method)
        .then((content: any) => {
          return resolve(content)
        })
    })
  }

  public async _CREATE(parameter: CreateForm, method: string = "INSERT", showAlert: boolean = true): Promise<any> {

    return new Promise((resolve) => {

      this.apiService.INSERT(parameter, method, showAlert)
        .then((id_create) => {

          BaseHelperService.changeEmmiter.emit(true)
          return resolve(id_create)
        })
    })
  }

  public async _UPDATE(parameter: UpdateForm, method: string = "UPDATE"): Promise<any> {

    return new Promise((resolve) => {

      this.apiService.UPDATE(parameter, method)
        .then((response) => {

          BaseHelperService.changeEmmiter.emit(true)
          return resolve(response)
        })
    })
  }

  public async _DELETE(parameter: DeleteFrom, method: string = "DELETE", showAlert: boolean = true): Promise<any> {

    return new Promise((resolve) => {
      this.apiService.DELETE(parameter, method, showAlert)
        .then((response) => {

          BaseHelperService.changeEmmiter.emit(true)
          return resolve(response)
        })
    })
  }
}