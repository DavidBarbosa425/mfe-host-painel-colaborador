import { Utils } from "../../services/utils.service"


export const enum_grid_options_default = {
  fix: 0,
  xs: 576, //Extra small (xs)
  sm: 768, //Small (sm) or Large IPad Portrait
  md: 992, //Medium (md)
  ipad: 1024, //Large IPad Land
  lg: 1200, //Large (lg)
  hd: 1280, //Resolution HD
  xl: 1400, //Extra large (xl)
  xxl: 1600, //Extra large 2 (xxl)
  max: 9999 //Max (max)
}

export class BaseModel{

  setProperties(instance,paramProperty,replaceIfNull : boolean = false){
    if(Utils.isNotNull(paramProperty) && Utils.isNotNull(paramProperty)){
      Object.keys(paramProperty).forEach( (itemPropery) => {

        let instanceElement = null
        let paramElement = null

        try{
          let hasOwnProperty : boolean = instance.hasOwnProperty(itemPropery)

          if(hasOwnProperty && this.isNotNull(paramProperty[itemPropery])){
            instanceElement = instance[itemPropery]
            paramElement = paramProperty[itemPropery]

            if(Utils.isDate(instanceElement) && typeof paramElement == "string"){
              try{
                let dateProperty : Date = Utils.stringToDate(paramProperty[itemPropery])

                if(dateProperty.getFullYear() > 2000){
                  instance[itemPropery] = dateProperty
                }else{
                  throw "Not a valid date"
                }
              }catch(error){
                instance[itemPropery] = paramProperty[itemPropery]
              }
            }else{
              instance[itemPropery] = paramProperty[itemPropery]
            }
          }else{
            if(!instance.hasOwnProperty(itemPropery))
              // throw `propriedade não existente na instancia`
            if(this.isNull(paramProperty[itemPropery])){}
              // throw `valor da propriedade do parametro vazio`
          }

        }catch(error){
          console.log({
            "errorLevel" : "WARNING",
            "metohd" : "setProperties",
            "itemPropery" : itemPropery,
            "instanceElement" : instanceElement,
            "paramElement" : paramElement,
            "instance" : instance,
            "catch" : error,
          })
        }
      })
    }
  }

  isNull(value) {
    return (value == null ||
      value == undefined ||
      value.toString().trim() == "" ||
      (Array.isArray(value) && value.length == 0)
    )
  }

  isNotNull(value) {
    return (value != null &&
      value != undefined
      && (value.toString().trim() != "" || (Array.isArray(value) && value.length > 0))
    )
  }

  isEmpty() {
    if (JSON.stringify(this) == "{}")
      return true

    return false
  }

  isNotEmpty() {
    if (JSON.stringify(this) !== "{}")
      return true

    return false
  }

}

export class ValidacaoModel{

  valido : boolean = true
  campos : CampoValidacao[] = []

}

export class CampoValidacao{
  campo: string = ""
  mensagem: string = ""
}


export class BaseModelEntity extends BaseModel {

  is_exibir_alerta: boolean = true
  is_exibir_progress: boolean = true

  constructor(param:BaseModelEntityParam = null) {
    super()
    this.setProperties(this, param)
  }
}

export class BaseModelEntityParam {

  is_exibir_alerta?: boolean
  is_exibir_progress?: boolean
}
