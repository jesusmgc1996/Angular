import { Component } from '@angular/core';
import { VideojuegoService } from '../../services/videojuego/videojuego.service';
import { Videojuego } from '../../interfaces/videojuego';
import { DesarrolladorService } from '../../services/desarrollador/desarrollador.service';
import { Desarrollador } from '../../interfaces/desarrollador';
import { PlataformaService } from '../../services/plataforma/plataforma.service';
import { Plataforma } from '../../interfaces/plataforma';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-videojuego',
  templateUrl: './crear-videojuego.component.html',
  styleUrl: './crear-videojuego.component.css'
})

export class CrearVideojuegoComponent {
  videojuego: Videojuego = {}
  desarrolladores: Desarrollador[] = [];
  plataformas: Plataforma[] = [];

  constructor(private videojuegoService: VideojuegoService, private listarDesarrolladores: DesarrolladorService, private listarPlataformas: PlataformaService, private router: Router) { }

  ngOnInit(): void {
    this.listarDesarrolladores.listarDesarrolladores().subscribe(desarrolladores => {
      (this.desarrolladores = desarrolladores);
    });
    
    this.listarPlataformas.listarPlataformas().subscribe(plataformas => {
      (this.plataformas = plataformas);
    });
  }

  insertar() {
    if (this.videojuego.nombre && this.videojuego.idDesarrollador && this.plataformas.some(plataforma => plataforma.seleccionada) && this.videojuego.anio) {
      this.videojuego.idsPlataformas = this.plataformas.filter(plataforma => plataforma.seleccionada).map(plataforma => plataforma.id);
  
      this.videojuegoService.insertarVideojuego(this.videojuego).subscribe(() => {
        alert(`El videojuego se ha añadido correctamente.`);
        this.router.navigate(['']);
      });
    } else {
      alert(`Debe introducir el nombre y el año y seleccionar un desarrollador y, al menos, una plataforma.`);
    }
  }
}
