import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/base/base-api.service';


@Injectable({
    providedIn: 'root'
  })

export class PainelColaboradorApiService extends BaseApiService<any,any,any> {
    
    constructor() {
        super('painelcolaboradores')
      }
}