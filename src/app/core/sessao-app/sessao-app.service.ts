import { EventEmitter, Injectable } from "@angular/core";
import { SessaoApp } from "./sessao.model";


const KEY = 'sessaoApp';
@Injectable({ providedIn: 'root' })
export class SessaoAppService {

    public static sessaoAppChanged : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    static hasSessao() {
        return !!window.localStorage.getItem(KEY)
    }

    static setSessao(sessapApp: SessaoApp) : void{
        window.localStorage.setItem(KEY, SessaoAppService.encodeSessao(sessapApp))

        SessaoAppService.sessaoAppChanged.emit(true)
    }

    static getSessao() : SessaoApp {
        const sessapAppSTR : string = window.localStorage.getItem(KEY)
        if(!sessapAppSTR)
            return new SessaoApp()

        return (SessaoAppService.decodeSessao(sessapAppSTR))
    }

    static getSessaoEncoded() : String {
        return window.localStorage.getItem(KEY)
    }

    static removeSessao() : void {
        window.localStorage.removeItem(KEY);

        SessaoAppService.sessaoAppChanged.emit(false)
    }

    static encodeSessao(sessaoApp: SessaoApp) : string {
        const stringfy = JSON.stringify(sessaoApp)
        const encoded = btoa(stringfy)
        return encoded
    }

    static decodeSessao(sessaoEncoded: string) : SessaoApp {
        const decoded = atob(sessaoEncoded)
        const parse = JSON.parse(decoded)
        return new SessaoApp(parse)
    }

}
