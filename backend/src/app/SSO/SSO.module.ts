import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allservicesModule } from '../@core/services/allservices.module';

import { AuthGuard } from '../@core/_guard/auth.guard';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent  }  from './welcome/welcome.component';

import { ssorouting } from './SSO-routing.module';
import { stylelibraryModule } from '../@styleLibrary/styleLibrary.module';

@NgModule({
    imports: [
        CommonModule,
        allservicesModule,
        ssorouting,
        stylelibraryModule
        
    ],
    declarations: [
        LoginComponent,
        WelcomeComponent
    ],
    providers: [AuthGuard],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]   
})

export class ssoModule {}