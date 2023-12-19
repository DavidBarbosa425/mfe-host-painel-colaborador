import { UsuarioGrid } from "../../features/usuario/usuario.model"
import { Utils } from "../../shared/services/utils.service"
import { BaseModel } from "../../shared/base/models/baseModel"
import { TokenApi } from "./token.model"


export const AmbienteEnum = {
    BACKOFFICE : 1,
    CONFIRPDIGITAL : 2
}

export class SessaoApp extends BaseModel {

    tokenApi : TokenApi = new TokenApi()
    usuarioLogado : UsuarioGrid = new UsuarioGrid()
    idClienteSelecionado : number = 0
    ambiente : number = 0

    constructor(param:SessaoAppParam = null){
        super()
        if(param)
            this.setProperties(this,param)
    }

    validarSessao() : boolean {
        if(this.usuarioLogado?.Id > 0 &&
        this.tokenApi &&
        (this.ambiente == AmbienteEnum.BACKOFFICE || (this.ambiente == AmbienteEnum.CONFIRPDIGITAL && this.idClienteSelecionado))){
            return true
        }

        return false
    }

    validarTokenApi() : boolean{
      if(Utils.isNotNull(this.tokenApi.access_token) && Utils.isNotNull(this.tokenApi.token_type)){
        return true
      }

      return false
    }
}

export class SessaoAppParam {
    tokenApi : TokenApi
    usuarioLogado : UsuarioGrid
    idClienteSelecionado: number
    ambiente? : number
}
