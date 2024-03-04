import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desarrollador } from '../../interfaces/desarrollador';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DesarrolladorService {

  private url = "http://localhost:8080/desarrollador";

  constructor(private http: HttpClient) { }

  listarDesarrolladores(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(this.url);
  }
}
