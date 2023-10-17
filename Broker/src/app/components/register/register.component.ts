import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mostrarMsgError: boolean = false;
  msgError: string = "";
  registerForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]], // Adjust the pattern as needed
    nacimiento: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
    telefono: ['', [Validators.required]], // Adjust the pattern as needed
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService) { }

  ngOnInit(): void {
  }



  // Getters
  get nombre() {
    return this.registerForm.controls.nombre;
  }
  get apellido() {
    return this.registerForm.controls.apellido;
  }
  get dni() {
    return this.registerForm.controls.dni;
  }
  get nacimiento() {
    return this.registerForm.controls.nacimiento;
  }
  get correo() {
    return this.registerForm.controls.correo;
  }
  get password() {
    return this.registerForm.controls.contraseña;
  }
  get telefono() {
    return this.registerForm.controls.telefono;
  }


  
  submitForm() {
    if (this.registerForm.valid) {
      this.msgError = "";
      this.mostrarMsgError = false;

      // Obtén los datos del formulario
      const userData = this.registerForm.value;
      console.log(userData)

      // Llama al servicio para crear un nuevo usuario
      this.userService.createUser(userData).subscribe(
        (response) => {
          // Maneja la respuesta si es necesario
          console.log('Usuario creado:', response);
          this.router.navigateByUrl('/login');
        },
        (error) => {
          // Maneja el error si es necesario
          console.error('Error al crear usuario:', error);
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
      this.mostrarMsgError = true;
      this.msgError = "Por favor verifique completar todos los campos correctamente.";
    }
  }
}
