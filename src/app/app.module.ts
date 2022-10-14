import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AboutComponent} from './page/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { InscriptionComponent } from './page/inscription/inscription.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import { SessionsComponent } from './page/sessions/sessions.component';
import {MatButtonModule} from "@angular/material/button";
import { ResultsComponent } from './page/results/results.component';
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import { MatchTableComponent } from './shared/match-table/match-table.component';
import {MatIconModule} from "@angular/material/icon";
import { ContactComponent } from './page/contact/contact.component';
import { ShopComponent } from './page/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InscriptionComponent,
    SessionsComponent,
    ResultsComponent,
    MatchTableComponent,
    ContactComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forRoot([
      {path: '', component: AboutComponent},
      {path: 'inscription', component: InscriptionComponent},
    ]),
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
