import { EventEmitter, Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class PermissaoService {

    public static permissaoChange : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }
}