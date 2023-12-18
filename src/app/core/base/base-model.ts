import { BaseModel } from "../../shared/base/models/baseModel"


const mensagemErroInterno : string = "Ocorreu um erro interno no sistema"
const mensagemErroDados : string = "Dados Invalidos"

export const errorsTypes : any[] = [
  {
    status : 500,
    error: {},
    mensagemUsuario : mensagemErroInterno
  },
  {
    status : 404,
    error: {},
    mensagemUsuario : mensagemErroInterno
  },
  {
    status : 400,
    error: {},
    mensagemUsuario : mensagemErroDados
  }
]

export class Error500GRID extends BaseModel{
  ExceptionMessage: string
  ExceptionType: string
  Message: string
  StackTrace: string

  constructor(params : any = {}){
    super()
    super.setProperties(this,params)
  }
}

export class Error0GRID extends BaseModel{
  message: string = ""
  name: string = ""
  statusText: string = ""

  constructor(params : any = {}){
    super()
    super.setProperties(this,params)
  }

}

export class CustomError extends BaseModel{
  status : number = 0
  error : any = {}
  mensagemUsuario: string = ""

  constructor(params : any = {}){
    super()
    super.setProperties(this,params)
  }
}
