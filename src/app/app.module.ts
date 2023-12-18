import { LOCALE_ID, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { PainelColaboradorModule } from "./features/painel-colaborador.module";
import { SessaoAppService } from "./shared/base/sessao-app/sessao-app.service";
import { ProgressService } from "./core/services/progress.service";
import { PermissaoService } from "./core/services/permissao.service";
import { AuthService } from "./core/auth/auth.service";
import { DatePipe } from "@angular/common";
import { BaseComponent } from "./shared/base/components/base-page/base.component";


@NgModule({
    declarations: [AppComponent],
    providers: [
        SessaoAppService,
        ProgressService,
        PermissaoService,
        AuthService,
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        DatePipe
    ],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        SharedModule,
        PainelColaboradorModule
    ]
})
export class AppModule {}