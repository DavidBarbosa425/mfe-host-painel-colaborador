import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
    //   SignInComponent,
    ],
    exports : [
    //   SignInComponent,
    ],
    imports: [
        SharedModule,
        // NgxMaskModule.forRoot(),
    ]
})
export class CoreModule{}
