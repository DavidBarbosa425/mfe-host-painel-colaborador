import { NgModule } from "@angular/core";
import { TituloFormComponent } from "./titulo-form/titulo.form.component";
import { MaterialModule } from "../../libraries/material/material.module";
import { CustomFontAwesomeModule } from "../../libraries/font-awesome/fa.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations:[
    TituloFormComponent,

  ],
  exports:[
    TituloFormComponent,
  ],
  imports: [
    MaterialModule,
    CustomFontAwesomeModule,
    FontAwesomeModule
  ]
})
export class CustomFormularioModule{

}
