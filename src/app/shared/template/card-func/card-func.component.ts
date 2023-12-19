import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { BaseComponent } from "../../base/components/base-page/base.component";

import { InputCardFunc } from "./card-func.model";


@Component({
    selector: 'card-func',
    templateUrl: './card-func.component.html',
    styleUrls: ['./card-func.component.css']
})

export class CardFuncComponent extends BaseComponent implements OnInit {

    @Input("InputCardFunc") input: InputCardFunc = new InputCardFunc()
    @Output() pressclick: EventEmitter<boolean> = new EventEmitter();

    ngOnInit(): void {

    }

    pressClick() : void {

        this.pressclick.emit(true)
    }

    getFoto() : string {

        if (this.input.foto != "" && this.input.foto != null)
            return this.input.foto

        return this.input.emptyPhoto
    }

    getClassCard(): string {

        if (!this.input.with_card_border){
            return "mat-card-func card_sem_borda"
        }

        return this.input?.status == "D" ? "mat-card-func text-danger" : "mat-card-func"
    }
}