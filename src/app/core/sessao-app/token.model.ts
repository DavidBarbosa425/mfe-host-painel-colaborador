import { BaseModel } from "../../shared/base/models/baseModel"


export class TokenApi extends BaseModel{
    access_token : string = ""
    token_type : string = ""
    expires_in: number = 0

    constructor(obj : Object = {}){
        super()
        this.setProperties(this,obj)
    }
}