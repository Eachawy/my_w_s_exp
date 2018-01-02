import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
// Guard
import { AuthGuard } from '../app/_guard/auth.guard';
import { AuthonService } from '../app/services/authon.service';
// Firebase tools
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../template/header/header.component';
import { FooterComponent } from '../template/footer/footer.component';
import { MenuComponent } from '../template/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
// Services
import { UsersService } from './services/users.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'welcome', canActivate: [AuthGuard], component: WelcomeComponent },
  { path: 'adduser', canActivate: [AuthGuard], component: AddUserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WelcomeComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'backend'),
    AngularFirestoreModule
  ],
  providers: [UsersService, AuthGuard, AuthonService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private router: Router) { }

  ngDoBootstrap() {

      this.router.initialNavigation();
}
 }