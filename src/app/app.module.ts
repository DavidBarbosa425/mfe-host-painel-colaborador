import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { PainelColaboradorModule } from "./features/painel-colaborador.module";


@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        SharedModule,
        PainelColaboradorModule
    ]
})
export class AppModule {}