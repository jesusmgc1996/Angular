import { Component } from '@angular/core';
import { Desarrollador } from '../../interfaces/desarrollador';
import { Plataforma } from '../../interfaces/plataforma';
import { VideojuegoService } from '../../services/videojuego/videojuego.service';
import { DesarrolladorService } from '../../services/desarrollador/desarrollador.service';
import { PlataformaService } from '../../services/plataforma/plataforma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from '../../interfaces/videojuego';

@Component({
  selector: 'app-editar-videojuego',
  templateUrl: './editar-videojuego.component.html',
  styleUrl: './editar-videojuego.component.css'
})

export class EditarVideojuegoComponent {
  videojuego: Videojuego = {};
  desarrolladores: Desarrollador[] = [];
  plataformas: Plataforma[] = [];
  plataformaSeleccionada: { [key: string]: boolean } = {};

  constructor(private videojuegoService: VideojuegoService, private listarDesarrolladores: DesarrolladorService, private listarPlataformas: PlataformaService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.videojuegoService.obtenerVideojuego(this.route.snapshot.params['id']).subscribe(videojuego => {
      this.videojuego = videojuego;
      if (this.videojuego.idsPlataformas) {
        this.videojuego.idsPlataformas.forEach(id => {
          this.plataformaSeleccionada[id] = true;
        });
      }
    });

    this.listarDesarrolladores.listarDesarrolladores().subscribe(desarrolladores => {
      (this.desarrolladores = desarrolladores);
    });

    this.listarPlataformas.listarPlataformas().subscribe(plataformas => {
      (this.plataformas = plataformas);
    });
  }

  actualizar() {
    if (this.videojuego.nombre && this.videojuego.idDesarrollador && this.plataformas.some(plataforma => this.plataformaSeleccionada[plataforma.id]) && this.videojuego.anio) {
      this.videojuego.idsPlataformas = Object.keys(this.plataformaSeleccionada).filter(key => this.plataformaSeleccionada[key]).map(id => Number(id));

      this.videojuegoService.actualizarVideojuego(this.videojuego).subscribe(() => {
        alert(`El videojuego se ha actualizado correctamente.`);
        this.router.navigate(['/']);
      });
    } else {
      alert(`Debe introducir el nombre y el año y seleccionar un desarrollador y, al menos, una plataforma.`);
    }
  }
}
