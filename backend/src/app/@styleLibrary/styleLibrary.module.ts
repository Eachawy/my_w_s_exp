import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';
import { 
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MasterComponent,
    ssocomponentlayout
} from './templates';


const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MasterComponent,
    ssocomponentlayout
];




@NgModule({
    imports: [
        CommonModule,
        MaterializeModule,
        RouterModule
    ],
    declarations: [
        COMPONENTS
    ],
    exports: [COMPONENTS],
    providers:[],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class stylelibraryModule {}