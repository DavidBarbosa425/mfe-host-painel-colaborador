import { Inject, Injectable } from '@angular/core';

import { UsuarioApiService } from './usuario-api.service';
import { UsuarioFilter, UsuarioGrid } from './usuario.model';
import { BaseHelperService } from '../../core/base/base-helper.service';
import { TokenApi } from '../../core/sessao-app/token.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioHelperService extends BaseHelperService<any, any, any> {

  constructor(
    @Inject(UsuarioApiService)_apiService: UsuarioApiService = new UsuarioApiService(),
  ) {
    super(_apiService)
  }

  public GETLOGIN(tokenApi: TokenApi = null): Promise<UsuarioGrid> {

    return new Promise(async (resolve, reject) => {

      let resultado: UsuarioGrid = await this.apiService.GETLOGIN(tokenApi)

      return resolve(resultado)

    })
  }
}
