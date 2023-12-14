import { NgModule } from "@angular/core";
import { PainelColaboradorComponent } from "./painel-colaborador/pages/painel-colaborador.component";
import { PainelColaboradorResumoComponent } from "./painel-colaborador/pages/resumo/painel-colaborador-resumo.component";
import { PainelColaboradorAcessoRapidoComponent } from "./painel-colaborador/pages/acesso-rapido/painel-colaborador-acesso-rapido.component";
import { CustomFormularioModule } from "../shared/template/form/custom-formulario.module";
import { SharedModule } from "../shared/shared.module";
import { PainelColaboradorTabsComponent } from "./painel-colaborador/pages/tabs/painel-colaborador-tabs.component";
import { PainelColaboradorTabsEsquipeComponent } from "./painel-colaborador/pages/tabs/equipe/painel-colaborador-tabs-equipe.component";
import { CardEquipeComponent } from "./painel-colaborador/pages/tabs/equipe/card-equipe/card-equipe.component";
import { PainelColaboradorTabsPontoComponent } from "./painel-colaborador/pages/tabs/ponto/painel-colaborador-tabs-ponto.component";

@NgModule({
    declarations: [
        PainelColaboradorComponent,
        PainelColaboradorResumoComponent,
        PainelColaboradorAcessoRapidoComponent,
        PainelColaboradorTabsComponent,
        PainelColaboradorTabsEsquipeComponent,
        CardEquipeComponent,
        PainelColaboradorTabsPontoComponent
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
        PainelColaboradorTabsComponent,
        PainelColaboradorTabsEsquipeComponent,
        CardEquipeComponent,
        PainelColaboradorTabsPontoComponent
    ]
})
export class PainelColaboradorModule { }
