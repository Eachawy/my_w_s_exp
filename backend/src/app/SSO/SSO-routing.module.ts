import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../@core/_guard/auth.guard';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const rout: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'welcome', canActivate: [AuthGuard], component: WelcomeComponent },
    { path: 'CIS', canActivate: [AuthGuard], loadChildren: './Pages/pages.module#pagesModule' },
];

@NgModule({
    imports:[
        RouterModule.forChild(rout),
    ],
    exports: [RouterModule],
})

export class ssorouting {}