import { EventEmitter, Injectable } from "@angular/core";
import { BaseModel } from "../../shared/base/models/baseModel";


@Injectable({ providedIn: 'root' })
export class AlertaService {

  public static alerta : EventEmitter<Alerta> = new EventEmitter<Alerta>();
  public static catch : EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }
}

export class Alerta extends BaseModel {

  tipo: string = TipoAlerta.SUCCESS
  mensagem: string = ""

  constructor(obj : AlertaParam = null){
    super()
    this.setProperties(this,obj)
  }
}

export class AlertaParam {

  tipo: string
  mensagem: string
}


export const TipoAlerta = {
  SUCCESS: 's',
  WARNING: 'w',
  DANGER: 'd'
}
