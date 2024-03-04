import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from '../../interfaces/videojuego';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class VideojuegoService {

  private url = "http://localhost:8080/juego";

  constructor(private http: HttpClient) { }

  listarVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.url);
  }

  insertarVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(`${this.url}/insertar1`, JSON.stringify(videojuego), httpOptions);
  }

  obtenerVideojuego(id: number): Observable<Videojuego> {
    return this.http.post<Videojuego>(`${this.url}/obtener1`, { id: id }, httpOptions);
  }

  actualizarVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.put<Videojuego>(`${this.url}/actualizar1`, JSON.stringify(videojuego), httpOptions);
  }

  borrarVideojuego(id: number): Observable<any> {
    const options = {
      headers: httpOptions.headers,
      body: { id: id }
    };
    return this.http.delete<Videojuego>(`${this.url}/borrar1`, options);
  }
}