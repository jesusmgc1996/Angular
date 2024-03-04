import { Component } from '@angular/core';
import { VideojuegoService } from '../../services/videojuego/videojuego.service';
import { Videojuego } from '../../interfaces/videojuego';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listar-videojuegos',
  templateUrl: './listar-videojuegos.component.html',
  styleUrl: './listar-videojuegos.component.css'
})

export class ListarVideojuegosComponent {
  videojuegos: Videojuego[] = [];

  constructor(private videojuego: VideojuegoService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.videojuego.listarVideojuegos().subscribe(videojuegos => {
      (this.videojuegos = videojuegos);
    });
  }

  borrarVideojuego(id: number) {
    if (this.cookieService.check('jwt')) {
      if (confirm('¿Está seguro de que quiere borrar este videojuego?')) {
        this.videojuego.borrarVideojuego(id).subscribe(() => {
          alert(`El videojuego se ha borrado correctamente.`);
          location.reload();
        });
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
