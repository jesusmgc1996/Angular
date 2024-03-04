import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plataforma } from '../../interfaces/plataforma';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PlataformaService {

  private url = "http://localhost:8080/plataforma";

  constructor(private http: HttpClient) { }

  listarPlataformas(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.url);
  }
}
