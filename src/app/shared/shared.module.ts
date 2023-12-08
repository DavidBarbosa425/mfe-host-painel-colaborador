import { NgModule } from "@angular/core";
import { MaterialModule } from "./libraries/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser'



@NgModule({
  declarations: [

  ],
  exports : [
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule

  ],
  imports : [
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})

export class SharedModule {}
