import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';

import { Textboxcomponent } from './textbox/textbox.directive';
import { SelectComponent } from './select/select.component';
import { Searchcomp } from './search/searchcomp.directive';

const lookupsCOMPONENTS = [
    Textboxcomponent,
    SelectComponent,
    Searchcomp
];


@NgModule({
    declarations: [
        lookupsCOMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterializeModule
    ],
    exports: [lookupsCOMPONENTS],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class  lookupsModule {}