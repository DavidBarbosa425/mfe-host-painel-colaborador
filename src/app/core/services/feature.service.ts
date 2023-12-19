import { PainelColaboradorApiService } from "../../features/painel-colaborador/entity/painel-colaborador-api.service"
import { PainelColaboradorHelperService } from "../../features/painel-colaborador/entity/painel-colaborador-helper.service"
import { UsuarioApiService } from "../../features/usuario/usuario-api.service"
import { UsuarioHelperService } from "../../features/usuario/usuario-helper.service"
import { BaseModel } from "../../shared/base/models/baseModel"

export class FeaturesHelpers extends BaseModel{

  usuario : UsuarioHelperService
  painelColaborador: PainelColaboradorHelperService
 
  constructor(){
    super()

      this.usuario = new UsuarioHelperService(new UsuarioApiService())
      this.painelColaborador = new PainelColaboradorHelperService(new PainelColaboradorApiService())

  }
}
