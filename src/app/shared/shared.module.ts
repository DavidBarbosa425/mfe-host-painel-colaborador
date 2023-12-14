import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./libraries/material/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [

  ],
  exports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule

  ],
  imports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})

export class SharedModule {}
