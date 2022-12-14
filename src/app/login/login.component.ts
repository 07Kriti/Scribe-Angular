import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string="";
  userError: any;

  constructor(public fb: FormBuilder, public authService: AuthService) { 

    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(form:any) {
   this.authService.login(form.value.email,form.value.password).then((data) => {
      console.log(data);
      this.message= "You have been logged in successfull."}) .catch((error) => {
        console.log(error);
        this.userError= error;
        
      })
    }

}
