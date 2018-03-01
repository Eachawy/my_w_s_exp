import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pagecomponent } from './pages-components';
import { pagesroutingModule } from './pages-routing.module';
import { usersModule } from './users/users.module';
import { stylelibraryModule } from '../@styleLibrary/styleLibrary.module';

@NgModule({
    imports:[
        usersModule,
        pagesroutingModule,
        stylelibraryModule
    ],
    declarations: [pagecomponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class pagesModule {}


