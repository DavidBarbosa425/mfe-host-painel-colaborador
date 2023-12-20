import { EventEmitter, Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class ProgressService {

    public static progressChange : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }
}