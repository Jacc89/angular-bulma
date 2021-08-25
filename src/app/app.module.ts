import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// formularios
import { FormsModule } from "@angular/forms";
// componentes de la aplicación.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Servicios de aplicación

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
