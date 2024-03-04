import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../../interfaces/usuario';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
};

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private url = "http://localhost:8080/usuario";

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/autentica`, JSON.stringify(usuario), httpOptions);
  }

  getToken(): string {
    return this.cookieService.get('jwt');
  }
}
