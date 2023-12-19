import { HttpClient, HttpHeaders, HttpXhrBackend } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { SessaoAppService } from "../sessao-app/sessao-app.service";
import { UsuarioHelperService } from "../../features/usuario/usuario-helper.service";
import { AuthForm } from "./auth.model";
import { TokenApi } from "../sessao-app/token.model";
import { UsuarioGrid } from "../../features/usuario/usuario.model";
import { SessaoApp } from "../sessao-app/sessao.model";
import { appSettings } from "../appSettings";



@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    public isLogged : boolean = false
    public static isLoggedEmmiter : EventEmitter<boolean> = new EventEmitter<boolean>();

    http: HttpClient
    sessaoAppService: SessaoAppService
    usuarioHelper : UsuarioHelperService

    constructor(){

      this.http = new HttpClient(new HttpXhrBackend({
        build: () => new XMLHttpRequest()
      }))
      this.sessaoAppService = new SessaoAppService()
      this.usuarioHelper = new UsuarioHelperService()
    }

    authenticate(authForm: AuthForm, idClienteSelecionado: number = 0) : Promise<void> {

      return new Promise( (resolve,reject) => {

        let headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })

        let body : string = this.convertObjectToUrlEncoded(authForm)

        this.http
        .post(
          `${appSettings.urlApi}/token`,
          body,
          {headers}
        )
        .toPromise()
        .then( async (res) => {

          const tokenApi : TokenApi = new TokenApi(res)

          const usuarioGetLoginGRID : UsuarioGrid = await this.usuarioHelper.GETLOGIN(tokenApi)

          usuarioGetLoginGRID.Senha = ""

          const newSessaoApp : SessaoApp = new SessaoApp({
            tokenApi : tokenApi,
            usuarioLogado : usuarioGetLoginGRID,
            idClienteSelecionado: idClienteSelecionado,
            ambiente : authForm.ambiente
          })

          SessaoAppService.setSessao(newSessaoApp);

          this.isLogged = true

          return resolve()
        })
        .catch( (error) => {

          this.isLogged = false

          return reject(error)

        }).finally( () => {

          AuthService.isLoggedEmmiter.emit(this.isLogged)

        });
      })
    }

    convertObjectToUrlEncoded(object : any) : string {
      let params : string[] = []

      Object.keys(object).forEach( (key) => {
        params.push(`${key}=${object[key]}`)
       });

      return params.join("&")

    }
}
