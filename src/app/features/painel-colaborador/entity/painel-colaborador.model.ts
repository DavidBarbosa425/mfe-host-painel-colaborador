

export const AmbienteSelecionadoEnumm = {
  BACKOFFICE: 1,
  CONFIRP_DIGITAL : 2
}
export class UsuarioLogado {
  id: number = 0
  email:string = ''
  }

  export class SessaoAppToIframe {
    idClienteSelecionado: number = 0
    ambienteSelecionado: number = 0
    path: string = ''
    usuarioLogado: UsuarioLogado
  }


export class FuncionariosFilter {

  idCliente: number = 0
  idFuncionario: number = null

//   constructor(obj:FuncionariosFilterParam = null){
//       super()
//       this.setProperties(this,obj)
//     }
}

export class FuncionariosFilterParam {

  idCliente: number
  idFuncionario?: number
}

export class FuncionariosGrid {

  idFuncionario: number = 0
  idUsuarioBackoffice: number = 0
  idFuncionarioControleUsuarioSite: number = 0
  idFuncionarioControleUsuario: number = 0
  emailControleUsuarioSite: string = ''
  emailControleUsuario: string = ''
  nome: string = ''
  cargo: string = ''
  departamento: string = ''
  foto: string = ''
  nomeEmpresa: string = ''

//   constructor(obj:FuncionariosGridParam = null){
//       super()
//       this.setProperties(this,obj)
//     }
}

export class FuncionariosGridParam {

  idFuncionario: number
  idUsuarioBackoffice: number
  idFuncionarioControleUsuarioSite: number
  idFuncionarioControleUsuario?: number
  emailControleUsuarioSite: string = ''
  emailControleUsuario: string = ''
  nome?: string 
  cargo?: string 
  departamento?: string 
  foto?: string 
  nomeEmpresa?: string 
}

export class FuncionarioSuperiorGrid {

  idGestorEquipe: number = 0
  idFuncionario: number = 0
  nomeGestor: string = ''
  cargo: string = ''
  foto: string = ''

//   constructor(obj:FuncionarioSuperiorGridParam = null){
//       super()
//       this.setProperties(this,obj)
//     }
}

export class FuncionarioSuperiorGridParam {

  idGestorEquipe: number 
  idFuncionario: number 
  nomeGestor?: string 
  cargo?: string 
  foto?: string 
}



