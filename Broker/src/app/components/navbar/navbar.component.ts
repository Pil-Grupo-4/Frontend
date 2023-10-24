import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mostrarBotones: boolean = true;
  usuarioLogeadoSubscription: Subscription;

  constructor(private loginService: LoginService) {
    this.usuarioLogeadoSubscription = this.loginService.usuarioLogeado$.subscribe((usuario) => {
      this.mostrarBotones = !!usuario;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Asegúrate de desuscribirte cuando el componente se destruye
    this.usuarioLogeadoSubscription.unsubscribe();
  }
}
