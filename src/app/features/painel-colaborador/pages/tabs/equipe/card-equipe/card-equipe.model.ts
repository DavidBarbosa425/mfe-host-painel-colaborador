
export class CardEquipe  {

    nome: string = "Alex Almeida"
    cargo: string = "Analista de Sistemas"
    departamento: string = "Desenvolvimento"
    foto: string = "https://confirpdigital.com.br/imagens/icon_funcionario_angular_vazio4.png"
    emptyPhoto: string = 'https://confirpdigital.com.br/imagens/icon_funcionario_angular_vazio4.png'

    // constructor(obj: CardEquipeParam = null) {
    //     super()
    //     this.setProperties(this, obj)
    // }
}

export class CardEquipeParam {

    nome?: string
    cargo: string
    departamento: string
    foto?: string
    emptyPhoto?: string
}