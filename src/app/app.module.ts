import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { NewBusinessCardComponent } from './new-business-card/new-business-card.component';
import { WebCamComponent } from './web-cam/web-cam.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { SaerchBusinessCardsComponent } from './saerch-business-cards/saerch-business-cards.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    NewBusinessCardComponent,
    WebCamComponent,
    BusinessCardsComponent,
    SaerchBusinessCardsComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
