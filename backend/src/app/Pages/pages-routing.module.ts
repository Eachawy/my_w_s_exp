import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';

import { pagecomponent } from './pages-components';

const route : Routes = [
    { path: 'component', component: pagecomponent, loadChildren: './users/users.module#usersModule'}
];

@NgModule({
    imports:[
        RouterModule.forChild(route),
    ],
    exports: [RouterModule]
})

export class pagesroutingModule {}