import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../inicio-components/hero/hero';
import { Features } from '../../inicio-components/features/features';
import { Stats } from '../../inicio-components/stats/stats';
<<<<<<< HEAD
import { Members } from '../../components/members/members';
import { Promos } from '../../inicio-components/promos/promos';
=======
>>>>>>> feature/08-mayo
import { Footer } from '../../components/footer/footer';
import { CotizacionesTableComponent } from '../cotizaciones-tablecomponent/cotizaciones-table.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
<<<<<<< HEAD
  imports: [Navbar, Hero, Features, Stats, Members, Footer, CotizacionesTableComponent, Promos],
=======
  imports: [Navbar, Hero, Features, Stats, Footer, CotizacionesTableComponent],
>>>>>>> feature/08-mayo
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Inicio {}
