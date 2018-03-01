import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';

import { usersroutingModule } from './users-routing.moudule';
import { AddUserComponent } from './usercomponent/user.component';
import { userscomponents } from './users.component';
import { FormsModule } from '@angular/forms';

import { lookupsModule } from '../../@core/lookups/lookups.module';
import { allservicesModule } from '../../@core/services/allservices.module';

const COMPONENTS = [
    AddUserComponent,
    userscomponents
];

@NgModule({
    imports: [
        FormsModule,
        usersroutingModule, 
        MaterializeModule,
        allservicesModule,
        CommonModule,
        lookupsModule
    ],
    declarations:[
        COMPONENTS
    ],
    providers: []

})

export class usersModule {}