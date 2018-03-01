import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../@core/_guard/auth.guard';
import { userscomponents } from './users.component'
import { AddUserComponent } from './usercomponent/user.component'
const rout : Routes = [
    { 
        path:'users', 
        component: userscomponents,
        children: [
            { path: 'user', component: AddUserComponent }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(rout),
    ],
    exports:[
        RouterModule
    ],
    providers: [AuthGuard]
})

export class usersroutingModule {}