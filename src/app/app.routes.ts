import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home da página',
    component: HomeComponent
  },
  {
    path: 'sobre',
    title: 'sobre da página',
    component: SobreComponent
  },
  {
    path: 'servicos/:id',
    title: 'serviços da página',
    component: ServicosPrestadosComponent
  },
];
