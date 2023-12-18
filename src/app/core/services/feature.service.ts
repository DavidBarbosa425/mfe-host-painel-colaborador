import { UsuarioApiService } from "../../features/usuario/usuario-api.service"
import { UsuarioHelperService } from "../../features/usuario/usuario-helper.service"
import { BaseModel } from "../../shared/base/models/baseModel"

export class FeaturesHelpers extends BaseModel{

  usuario : UsuarioHelperService
 
  constructor(){
    super()

      this.usuario = new UsuarioHelperService(new UsuarioApiService())

  }
}
