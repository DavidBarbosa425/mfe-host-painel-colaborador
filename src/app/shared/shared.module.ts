import { NgModule } from "@angular/core";
import { MaterialModule } from "./libraries/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [

  ],
  exports : [
    FlexLayoutModule,
    MaterialModule

  ],
  imports : [
    FlexLayoutModule,
    MaterialModule
  ]
})

export class SharedModule {}
