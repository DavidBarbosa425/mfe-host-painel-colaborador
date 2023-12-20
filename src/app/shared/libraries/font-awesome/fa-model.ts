
import { BaseModel } from "../../base/models/baseModel";
import { faStyleEnum } from "./fa-style-enum";

export class FaModel extends BaseModel {

  style: string = faStyleEnum.SOLID
  name: string = "circle"
  hasStack: boolean = false
  cssClass : string[] = []
  styleObj: string = ""

  constructor(obj:FaModelParam = null){
    super()
    this.setProperties(this,obj)
  }
}

export class FaModelParam {

  style?: string
  name?: string
  hasStack?: boolean
  cssClass?: string[]
  styleObj?: string
}