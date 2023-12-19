import { BaseModel } from "../../base/models/baseModel"


export class InputCardFunc extends BaseModel {

    id: number = 0
    idFunc: number = 0
    chapa: string = ""
    status: string = ""
    nome: string = ""
    foto: string = "https://confirpdigital.com.br/imagens/icon_funcionario_angular_vazio4.png"
    emptyPhoto: string = 'https://confirpdigital.com.br/imagens/icon_funcionario_angular_vazio4.png'
    with_card_border: boolean = true

    constructor(obj: InputCardFuncParam = null) {
        super()
        this.setProperties(this, obj)
    }
}

export class InputCardFuncParam {

    id?: number
    idFunc: number
    chapa?: string
    status?: string 
    nome: string
    foto?: string
    emptyPhoto?: string
    with_card_border?: boolean
}