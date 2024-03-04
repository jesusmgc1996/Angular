import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private cookieService: CookieService, private router: Router) { }

  logout(): void {
    if (confirm('¿Está seguro de que quiere cerrar la sesión?')) {
      this.cookieService.delete('jwt');
      this.router.navigate(['']);
    }
  }

  get sesion(): boolean {
    return this.cookieService.check('jwt');
  }
}
