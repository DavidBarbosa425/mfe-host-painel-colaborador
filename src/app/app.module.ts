import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
<<<<<<< Updated upstream

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
=======
import { CustomFormularioModule } from "./shared/template/form/custom-formulario.module";
import { PainelColaboradorModule } from "./features/painel-colaborador.module";

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        SharedModule,
        CustomFormularioModule,
        PainelColaboradorModule
    ]
>>>>>>> Stashed changes
})
export class AppModule {}