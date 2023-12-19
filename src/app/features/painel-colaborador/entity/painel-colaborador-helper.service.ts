import { Injectable } from "@angular/core"
import { BaseHelperService } from "../../../core/base/base-helper.service"
import { PainelColaboradorApiService } from "./painel-colaborador-api.service"
import { FuncionariosFilter, FuncionarioSuperiorGrid } from "./painel-colaborador.model"



@Injectable({
    providedIn: 'root'
  })

  export class PainelColaboradorHelperService extends BaseHelperService<any, any, any> {

    constructor(
      _apiService: PainelColaboradorApiService = new PainelColaboradorApiService(),
    ) {
      super(_apiService)
    }

    public getSuperiorFuncionarios(filter : FuncionariosFilter = new FuncionariosFilter()) : Promise<FuncionarioSuperiorGrid[]> {

      return this._GET(filter, "getSuperiorFuncionarios")
    }
  }