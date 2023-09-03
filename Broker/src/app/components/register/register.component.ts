import { getLocaleCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    name:['', Validators.required],
    birthDate:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit():void {
  }

  submitForm(){
    if(this.registerForm.valid){
      console.log('Iniciando sesion');
      
    } else {
      console.error("Error al validar el formulario")
    }
  }
}
