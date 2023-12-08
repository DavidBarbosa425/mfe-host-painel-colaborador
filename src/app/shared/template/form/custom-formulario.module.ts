import { NgModule } from "@angular/core";
import { TituloFormComponent } from "./titulo-form/titulo.form.component";
import { MaterialModule } from "../../libraries/material/material.module";

@NgModule({
  declarations:[
    TituloFormComponent,

  ],
  exports:[
    TituloFormComponent,
  ],
  imports: [
    MaterialModule
  ]
})
export class CustomFormularioModule{

}
