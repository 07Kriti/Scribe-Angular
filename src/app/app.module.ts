import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/SignUp/signup/signup.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';

const firebaseConfig = {
  apiKey: "AIzaSyDG43nqiAVcShytmQvRwIY56QFcny-N7Dg",
  authDomain: "scribe-8ea4b.firebaseapp.com",
  projectId: "scribe-8ea4b",
  storageBucket: "scribe-8ea4b.appspot.com",
  messagingSenderId: "802341739673",
  appId: "1:802341739673:web:94138f5ab0f26c51f9ec08",
  measurementId: "G-8GCLLPQS67"
};
firebase.initializeApp(firebaseConfig);
//let auth = firebase.auth();

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
