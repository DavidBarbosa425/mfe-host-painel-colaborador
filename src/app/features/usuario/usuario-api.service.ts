import { Injectable } from "@angular/core"
import { UsuarioGrid, UsuarioInsert, UsuarioUpdate } from "./usuario.model"
import { TokenApi } from "../../core/sessao-app/token.model"
import { HttpHeaders } from "@angular/common/http"
import { BaseApiService } from "../../core/base/base-api.service"
import { appSettings } from "../../core/appSettings"


@Injectable({
  providedIn: 'root'
})

export class UsuarioApiService extends BaseApiService<UsuarioInsert,UsuarioUpdate>{

  constructor() {
    super('usuario')
  }

  public GETLOGIN(tokenApi : TokenApi = null) : Promise<UsuarioGrid> {

    return new Promise( async (resolve,reject) => {

      let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `${tokenApi.token_type} ${tokenApi.access_token}`
      })

      let content : UsuarioGrid = await this.http.post<UsuarioGrid>(`${appSettings.urlApi}/Usuario/GetLogin`
        , {}, {headers})
        .toPromise()

      return resolve(content)
    })
  }
}

