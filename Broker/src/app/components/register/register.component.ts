import { getLocaleCurrencySymbol } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mostrarMsgError: boolean = false;
  msgError: string = "";
  registerForm = this.formBuilder.group({
    name:['', Validators.required],
    birthDate:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required,Validators.minLength(6)]
  })

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit():void {
  }

  submitForm(){
    if(this.registerForm.valid){
      this.msgError = "";
      this.mostrarMsgError = false;
      this.registerForm.reset();
      this.router.navigateByUrl("/login");
    } else {
      this.registerForm.markAllAsTouched();
      this.mostrarMsgError = true;
      this.msgError = "Por favor verifique completar todos los campos correctamente.";
    }
  }

  // Getters
  get name(){
    return this.registerForm.controls.name;
  }
  get birthDate(){
    return this.registerForm.controls.birthDate;
  }
  get email(){
    return this.registerForm.controls.email;
  }
  get password(){
    return this.registerForm.controls.password;
  }
}
