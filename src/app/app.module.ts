import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ListarVideojuegosComponent } from './components/listar-videojuegos/listar-videojuegos.component';
import { CrearVideojuegoComponent } from './components/crear-videojuego/crear-videojuego.component';
import { EditarVideojuegoComponent } from './components/editar-videojuego/editar-videojuego.component';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'insertar', canActivate: [AuthGuard], component: CrearVideojuegoComponent },
  { path: 'editar/:id', canActivate: [AuthGuard], component: EditarVideojuegoComponent },
  { path: '**', component: ListarVideojuegosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListarVideojuegosComponent,
    LoginComponent,
    CrearVideojuegoComponent,
    EditarVideojuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
