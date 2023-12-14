

export class UsuarioBase  {
  Nome: string = ""
  Email: string = ""
  Senha: string = ""
  IsAtivo: boolean = false
  GuidToken: string = ""
  DataGuidToken: Date = null
  PlayerId: string = ""
  CPF: string = ""
  CelCorp: string = ""
  IsBloqueioVT: boolean = false
  IsDesligados: boolean = false
  IsUsuarioCliente: boolean = false

//   constructor(obj:any = {}){
//     super()
//     this.setProperties(this,obj)
//   }
}

export class UsuarioInsert extends UsuarioBase {
  Id: number = 0
  IdUsuarioInc: number = 0

//   constructor(obj:any = {}){
//     super()
//     this.setProperties(this,obj)
//   }
}

export class UsuarioFilter {
  Id: number = 0
  IdUsuarioInc: number = 0

//   constructor(obj:any = {}){
//     super()
//     this.setProperties(this,obj)
//   }
}

export class UsuarioUpdate extends UsuarioBase {
  Id: number = 0
  IdUsuarioUpd: number = 0

//   constructor(obj:any = {}){
//     super()
//     this.setProperties(this,obj)
//   }
}

export class UsuarioDelete {
  Id: number = 0
  IdUsuarioInc: number = 0

//   constructor(obj:any = {}){
//     super()
//     this.setProperties(this,obj)
//   }
}

export class UsuarioGrid extends UsuarioBase {
  Id: number = 0
  DataInc: Date = null
  IdUsuarioInc: number = 0
  DataUpd: Date = null
  IdUsuarioUpd: number = 0

//   constructor(obj:any = {}){
//     super()
//     this.setProperties(this,obj)
//   }
}

