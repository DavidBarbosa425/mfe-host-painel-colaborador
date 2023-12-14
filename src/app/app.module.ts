import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CustomFormularioModule } from "./shared/template/form/custom-formulario.module";

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        SharedModule,
        CustomFormularioModule
    ]
})
export class AppModule {}