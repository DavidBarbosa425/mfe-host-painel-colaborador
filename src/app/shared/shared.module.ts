import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./libraries/material/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { ProgressDefaultComponent } from './template/form/progress-defaul/progress-default.component';
import { CustomFontAwesomeModule } from './libraries/font-awesome/fa.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProgressDefaultComponent

  ],
  exports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProgressDefaultComponent,
    CustomFontAwesomeModule,
    FontAwesomeModule

  ],
  imports : [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomFontAwesomeModule,
    FontAwesomeModule
  ]
})

export class SharedModule {}
