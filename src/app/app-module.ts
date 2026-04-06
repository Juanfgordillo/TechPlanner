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

@NgModule({
  declarations: [App, Navbar, Hero, Features, Stats, Cta, Footer, Inicio],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
