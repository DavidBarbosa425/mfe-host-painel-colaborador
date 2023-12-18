import { NgModule } from "@angular/core";
import { PainelColaboradorComponent } from "./painel-colaborador/pages/painel-colaborador.component";
import { PainelColaboradorResumoComponent } from "./painel-colaborador/pages/resumo/painel-colaborador-resumo.component";
import { PainelColaboradorAcessoRapidoComponent } from "./painel-colaborador/pages/acesso-rapido/painel-colaborador-acesso-rapido.component";
import { CustomFormularioModule } from "../shared/template/form/custom-formulario.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        PainelColaboradorComponent,
        PainelColaboradorResumoComponent,
        PainelColaboradorAcessoRapidoComponent,
    ],
    providers: [],
    imports: [
        CustomFormularioModule,
        SharedModule,
    ],
    exports: [
        PainelColaboradorComponent,
        PainelColaboradorResumoComponent,
        PainelColaboradorAcessoRapidoComponent,
    ]
})
export class PainelColaboradorModule { }
