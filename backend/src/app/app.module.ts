import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms'
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WelcomeComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'backend'),
    AngularFirestoreModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
