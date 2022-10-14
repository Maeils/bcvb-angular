import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InscriptionComponent} from "./page/inscription/inscription.component";
import {SessionsComponent} from "./page/sessions/sessions.component";
import {AboutComponent} from "./page/about/about.component";
import {ResultsComponent} from "./page/results/results.component";
import {ContactComponent} from "./page/contact/contact.component";
import {ShopComponent} from "./page/shop/shop.component";

const routes: Routes = [
  { path: 'inscriptions', component: InscriptionComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
