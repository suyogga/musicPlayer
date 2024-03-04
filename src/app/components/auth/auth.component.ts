import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  router: Router = inject(Router)

  creatUserForm: FormGroup;
  loginUserForm: FormGroup;

  showUserImg: string = 'us2.png'
  errorMessage: string = ''
  showErrorCreateUserMsg: string = ''
  showCreateUserMsg: string = ''
  showSuccessCreateUserMsg: string = ''

  formData:FormData=new FormData();

  constructor() {}

  ngOnInit(): void {
    this.creatUserForm = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      gender: new FormControl('M'),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
      cpassword: new FormControl(null, [Validators.required]),
      userImg: new FormControl(null)

    })

    this.loginUserForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })

  }

}
