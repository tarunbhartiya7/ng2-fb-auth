import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PartialsDemoComponent } from './partials-demo/partials-demo.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA03mIEmO6e2RYcn9liWIvBtr1z7psNmn4",
  authDomain: "ng-fb-auth-118f1.firebaseapp.com",
  databaseURL: "https://ng-fb-auth-118f1.firebaseio.com",
  projectId: "ng-fb-auth-118f1",
  storageBucket: "ng-fb-auth-118f1.appspot.com",
  messagingSenderId: "894912571796"
}

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    PartialsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
