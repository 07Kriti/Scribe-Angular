import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,} from '@angular/forms';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        Validator: this.checkIfMatchingPasswords('password', 'confirmPassword'),
      }
    );
  }
  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group:FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if(password.value == confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }
    }
  }

  onSubmit(signupform: any) {
    let email: string = signupform.value.email;
    let password : string = signupform.value.password;
    let firstName : string = signupform.value.firstName;
    let lastName : string = signupform.value.lastName;

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((response:any) => {
      console.log(response);

      let randomNumber = Math.floor(Math.random()*1000)
      response.user.updateProfile({
        displayName: firstName + " " + lastName,
        photoURL: "https://api.adorable.io/avatars/" + randomNumber
      }).then(() => {
        this.message = "You have been signedup successfully. Please login."
      })

    }).catch((error:any) => {
      console.log(error);
    })
  }

  ngOnInit(): void {}
}   
 