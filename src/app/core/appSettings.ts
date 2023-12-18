import { Utils } from "../shared/services/utils.service"


export const EnvironmentEnum = {
    LOCAL: 'LOCAL',
    HOMOLOG: 'HOMOLOG',
    PROD: 'PROD',
}
export class AppSettings{
    environment: string = ""
    urlApi : string = ""

    constructor(param : string = ""){
      this.environment = param
      const atualUrl : string = window.location.href

      if(Utils.notExistsOnString(atualUrl,"localhost")){
        if(Utils.existsOnString(atualUrl,"h0")){
          this.environment = EnvironmentEnum.HOMOLOG
        }
        else
          this.environment = EnvironmentEnum.PROD
      }

      if(this.environment == EnvironmentEnum.LOCAL){
          this.urlApi = "http://localhost:55888/api"
      }else if(this.environment == EnvironmentEnum.PROD){
          this.urlApi = "https://cdapi.confirpdigital.com.br/api"
      }
      else if(this.environment == EnvironmentEnum.HOMOLOG){
        this.urlApi = "http://h0cdapi.confirpdigital.com.br/api"
      }
    }

}

export const appSettings : AppSettings = new AppSettings(EnvironmentEnum.LOCAL)
