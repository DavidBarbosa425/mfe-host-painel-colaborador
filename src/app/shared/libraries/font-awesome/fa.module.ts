import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far} from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NgModule } from '@angular/core';
import { FaTemplateComponent } from './fa-template/fa-template.component';

@NgModule({
  declarations : [
    FaTemplateComponent,
  ],
  exports : [
    FaTemplateComponent,
  ],
  imports : [
    FontAwesomeModule
  ]
})
export class CustomFontAwesomeModule {
  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas,far,fab)
  }
}
