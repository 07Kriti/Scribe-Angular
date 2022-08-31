import { Injectable } from '@angular/core';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email: string, password:string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string, first_name: string, last_name: string){
    return new Promise((resolve, reject) => {

      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        (response) => {
          
        }
      )
    })
  }
}
