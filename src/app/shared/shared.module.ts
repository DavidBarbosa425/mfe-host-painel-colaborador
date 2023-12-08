import { NgModule } from "@angular/core";
import { MaterialModule } from "./libraries/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [

  ],
  exports : [
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  imports : [
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ]
})

export class SharedModule {}
