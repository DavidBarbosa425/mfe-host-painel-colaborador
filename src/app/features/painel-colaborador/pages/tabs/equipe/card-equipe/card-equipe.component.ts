import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { CardEquipe } from "./card-equipe.model";



@Component({
    selector: 'card-equipe',
    templateUrl: './card-equipe.component.html',
    styleUrls: ['./card-equipe.component.css'],
})

export class CardEquipeComponent implements OnInit {

    @Input() card_equipe: CardEquipe = new CardEquipe()
    @Output() pressclick: EventEmitter<boolean> = new EventEmitter();

    ngOnInit(): void {

    }

    pressClick() : void {

        this.pressclick.emit(true)
    }

    getFoto() : string {

        if (this.card_equipe.foto != "")
            return this.card_equipe.foto

        return this.card_equipe.emptyPhoto
    }
}