import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Stats } from './components/stats/stats';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';
import { Inicio } from './paginas/inicio/inicio';
import { Login } from './paginas/login/login';
import { LoginHeader } from './components/login-header/login-header';
import { LoginForm } from './components/login-form/login-form';
import { Nosotros } from './paginas/nosotros/nosotros';
import { Members } from './components/members/members';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    Features,
    Stats,
    Cta,
    Footer,
    Inicio,
    Login,
    LoginHeader,
    LoginForm,
    Nosotros,
    Members,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
