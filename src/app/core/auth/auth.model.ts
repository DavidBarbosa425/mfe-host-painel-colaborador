import { BaseModel } from "../../shared/base/models/baseModel"
import { AmbienteEnum } from "../sessao-app/sessao.model"


export class AuthForm extends BaseModel{
  grant_type : string = 'password'
  username : string = ""
  password: string = ""
  Scope: string = "2"
  ambiente : number = AmbienteEnum.CONFIRPDIGITAL
//   Scope: Object[] = []

  constructor(param :  any){
    super()
    this.setProperties(this,param)
  }
}
