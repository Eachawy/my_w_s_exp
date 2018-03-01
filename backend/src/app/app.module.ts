import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
// external moduls
import { stylelibraryModule } from './@styleLibrary/styleLibrary.module';
import { pagesModule } from './Pages/pages.module';
import { allservicesModule } from './@core/services/allservices.module';
import { ssoModule } from './SSO/SSO.module';
// App router module
import { approuterModule } from './app-router.module'

import { lookupsModule } from '../app/@core/lookups/lookups.module';
// Components
import { AppComponent } from './app.component';
// import { HeaderComponent } from '../template/header/header.component';
// import { FooterComponent } from '../template/footer/footer.component';
// import { MenuComponent } from '../template/menu/menu.component';
// import { WelcomeComponent } from './components/welcome/welcome.component';
// // Services
// import { UsersService } from './services/users.service';
// import { AddUserComponent } from './components/users/users.component';
// import { LoginComponent } from './components/login/login.component';
// import { Textboxcomponent } from './lookups/textbox.directive';
// import { Searchcomp } from './lookups/searchcomp.directive';
// import { SelectComponent } from './lookups/select.component';
// // Guard
// import { AuthGuard } from '../app/_guard/auth.guard';
// import { AuthonService } from '../app/services/authon.service';

// const appRoutes: Routes = [
//   { path: 'welcome', canActivate: [AuthGuard], component: WelcomeComponent },
//   { path: 'Users', canActivate: [AuthGuard], component: AddUserComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // MenuComponent,
    // WelcomeComponent,
    // AddUserComponent,
    // LoginComponent,
    // Textboxcomponent,
    // Searchcomp,
    // SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    approuterModule,
    stylelibraryModule,
    pagesModule,
    allservicesModule,
    lookupsModule,
    ssoModule
  ],
  //providers: [UsersService, AuthGuard, AuthonService],
  bootstrap: [AppComponent]
})

export class AppModule {}