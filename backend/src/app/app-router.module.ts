import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { AuthGuard } from './@core/_guard/auth.guard';
const route : Routes = [
    { path: '', loadChildren: './SSO/SSO.module#ssoModule' }    
];

const config : ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports:[
        RouterModule.forRoot(route, config),
        CommonModule
    ],
    declarations: [],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class approuterModule {}

