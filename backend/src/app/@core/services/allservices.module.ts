import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase tools
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../../environments/environment';

import { AuthonService } from './authon/authon.service';
import { UsersService } from './users/users.service';


@NgModule({
    imports:[
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase, 'backend'),
        AngularFirestoreModule
    ],
    exports:[
        
    ],
    providers:[
        AuthonService,
        UsersService
    ]
})  

export class allservicesModule {}

