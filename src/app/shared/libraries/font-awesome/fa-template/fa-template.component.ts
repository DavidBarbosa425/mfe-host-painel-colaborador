import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FaModel } from '../fa-model';
import { faStyleEnum } from '../fa-style-enum';

@Component({
  selector: 'fa-template',
  templateUrl: './fa-template.component.html',
  styleUrls: ['./fa-template.component.less']
})
export class FaTemplateComponent implements OnInit,OnChanges {

  @Input("icon") icon:FaModel;
  @Input("style") style:string = faStyleEnum.SOLID;
  @Input("name") name:string;

  faStyleEnum = faStyleEnum;

  constructor() { }

  ngOnInit(): void {
    // this.loadIcon()
  }

  ngOnChanges(changes: SimpleChanges) {
    // if(changes['name']){
    //   this.loadName()
    // }
  }

  // loadIcon(){
  //   if(this.icon){
  //     if(faStyleEnum[this.icon.style.toUpperCase()]){
  //       this.icon.style = faStyleEnum[this.icon.style.toUpperCase()]
  //     }
  //   }
  //   if(!this.icon && this.name){
  //     this.loadName()
  //   }
  // }

  // loadName(){
  //   this.icon = new FaModel({
  //     style:this.style,
  //     name:this.name
  //   });
  // }

  getCssClassItemForm() : string[] {
    let cssClass : string[] = []
    
    cssClass.push("fa-icon")

    // if (this.icon.hasStack) {
    //   cssClass.push("fa-stack-1x")
    // }

    // if(Array.isArray(this.icon.cssClass)){
    //   this.icon.cssClass.forEach(itemCssClass => {
    //     cssClass.push(itemCssClass)
    //   })
    // }
    return cssClass
  }

  getStyleObjItemForm(): string {
    // return this.icon.styleObj
    return ''
  }

}
