import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemasComponent } from './temas/temas.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },

  { path: 'inicio', component: InicioComponent },
  { path: 'tema', component: TemasComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
