import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  usuario: Usuario = { usuario: "", password: "" };

  constructor(private router: Router, private usuarioService: UsuarioService, private cookieService: CookieService) { }

  login() {
    this.usuarioService.login(this.usuario).pipe(first()).subscribe((respuesta: any) => {
      if (respuesta) {
        this.cookieService.set('jwt', respuesta.jwt);
        this.router.navigate(['']);
      }
    })
  }
}
